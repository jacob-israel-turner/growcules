#!/usr/bin/env node

const program = require('commander');
const { version } = require('./package.json');
const killRogueProcess = require('./commands/kill-rogue-process');

program
  .version(version)
  .command('kill-rogue-process')
  .description(`Kills rogue node process when it doesn't shutdown properly`)
  .action(killRogueProcess);

program.parse(process.argv);
