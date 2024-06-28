import yaml from 'js-yaml';
import fs from 'fs';

/**
 * Checks for errors and logs any existing errors, or returns successfully
 * @param {string} filepath 
 * @returns {Object}
 */
export function checkAndLogError(filepath) {
    try {
        const yamlDoc = yaml.load(fs.readFileSync(filepath, 'utf8'));
        return {
            success: true,
            message: "YAML is free of errors and is parsed successfully",
        };
    } catch (e) {
        return {
            success: false,
            message: "Error parsing YAML",
            error: e.message
        };
    }
}