// Import required modules
import yaml from 'js-yaml';
import fs from 'fs';

/**
 * Reads yaml file and convert to a new JSON file
 * @param {String} yamlFile 
 * @param {String} jsonFile 
 * @returns {String}
 */
export function convertYamlToJson(yamlFile, jsonFile) {
    try {
        const yamlContent = fs.readFileSync(yamlFile, 'utf8');

        const jsonObj = yaml.load(yamlContent);

        const jsonString = JSON.stringify(jsonObj, null, 2);

        fs.writeFileSync(jsonFile, jsonString);

        return `Converted ${yamlFile} to ${jsonFile}`;
    } catch (e) {
        return `Error converting ${yamlFile} to ${jsonFile}:`, e.message;
    }
}
