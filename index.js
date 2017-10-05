#!/usr/bin/env node

const program = require('commander');
const { version } = require('./package.json');
const killRogueProcess = require('./commands/kill-rogue-process');
const docker = require('./commands/docker');

program
  .version(version)

program
  .command('kill-rogue-process')
  .description(`Kills rogue node process when it doesn't shutdown properly`)
  .action(killRogueProcess);

program
  .command('docker [command]')
  .description('Authenticates with AWS so we can fetch docker images')
  .action(docker)

program.parse(process.argv);
