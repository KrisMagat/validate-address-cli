#! /usr/bin/env node
"use strict";
const { Command } = require("commander");
// import { test1, test2 } from "./options";
//create the program (instance of Command)
const program = new Command();
// create command options 
// .parse(process.argv) gives access to command arguments 
//  [0] = 'node' 
//  [1] = 'command name'
//  [2 and onwards] = additional arguments
program
    .name("validate-address")
    .version("1.0.0")
    .description("A CLI program for validating US addresses from a CSV file using a 3rd party API")
    .option("-f, --filename [value]", "specify CSV file to evaluate")
    .option("-he, --hello [value]", "test hello [name]")
    .parse(process.argv);
//returns object with all program options
const options = program.opts();
//create options
const hello = () => {
    // check if the option has been used the user
    if (options.hello) {
        return process.argv[3];
    }
};
//display help page if no options selected
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map