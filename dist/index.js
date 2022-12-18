#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evaluate_1 = require("./evaluate");
const commander_1 = require("commander");
//create the program (instance of Command)
const program = new commander_1.Command();
// create command options 
// .parse(process.argv) gives access to command arguments 
//  [0] = 'node' 
//  [1] = 'command name'
//  [2] = 'options'
//  [3] = additional arguments
program
    .name("validate-address")
    .version("1.0.0")
    .description("A CLI program for validating US addresses from a CSV file using smarty.com API")
    .option("-f, --filename [value]", "specify CSV file to evaluate")
    .parse(process.argv);
//returns object with all program options
const options = program.opts();
// run function based on option selected by the user
if (options.filename) {
    (0, evaluate_1.evaluate)();
}
//display help page if no options selected
if (!process.argv.slice(2).length) {
    program.outputHelp();
    //display help after errors
    program.showHelpAfterError();
}
//# sourceMappingURL=index.js.map