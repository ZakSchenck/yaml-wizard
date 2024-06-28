import yaml from 'js-yaml';
import fs from 'fs';
import { diffLines } from 'diff';
import chalk from 'chalk';


/**
 * Checks differences between two different yaml files
 * @param {string} filepath1 
 * @param {string} filepath2 
 * @returns {Object}
 */
export function diffYamlFiles(filepath1, filepath2) {
    try {
        const yamlDoc1 = yaml.dump(yaml.load(fs.readFileSync(filepath1, 'utf8')));
        const yamlDoc2 = yaml.dump(yaml.load(fs.readFileSync(filepath2, 'utf8')));

        // Calculates differences within two different yaml files
        const differences = diffLines(yamlDoc1, yamlDoc2);

        // Iterates and prints differences
        differences.forEach((part) => {
            const color = part.added ? chalk.green : part.removed ? chalk.red : chalk.gray;
            process.stdout.write(color(part.value));
        });

        // If no errs return differences
        return {
            success: true,
            message: "Differences highlighted above",
        };
    } catch (e) {
        return {
            success: false,
            message: "Error diffing YAML files",
            error: e.message
        };
    }
}