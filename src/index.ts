#!/usr/bin/env node

import yargs from 'yargs';

yargs(process.argv)
    .demandCommand(1)
    .alias('h', 'help')
    .alias('v', 'version')
    .help()
    .version()
    .parse();
