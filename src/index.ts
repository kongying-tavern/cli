import yargs from 'yargs';

yargs(process.argv)
    .demandCommand(1)
    .parse();
