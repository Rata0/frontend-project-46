#!/usr/bin/env node


import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });

program.parse();