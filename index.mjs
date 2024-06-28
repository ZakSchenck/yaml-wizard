#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import { checkAndLogError } from './scripts/err-log.mjs';
import { diffYamlFiles } from './scripts/difference-between.mjs';
import { convertYamlToJson } from './scripts/convert-to-json.mjs';

program
  .version('1.0.0')
  .description('CLI Tool for YAML Assistance');

// Program command for finding and logging errors in a YAML file
program
  .command('errCheck <filepath>')
  .description('Checks and logs errors through yaml files')
  .action((filepath) => {
    console.log(checkAndLogError(filepath));
  });

// Program command for checking differences between two files
program
  .command('diff <filepath1> <filepath2>')
  .description('Checks differences between two yaml files')
  .action((filepath1, filepath2) => {
    console.log(diffYamlFiles(filepath1, filepath2))
  })

// Program command for converting YAML file to JSON and outputting new file
program
  .command('convertJson <yamlFile> <jsonFile>')
  .description('Creates a new json file and converts yaml file to JSON')
  .action((yamlFile, jsonFile) => {
    console.log(convertYamlToJson(yamlFile, jsonFile))
  })

program.parse(process.argv);
