#! /usr/bin/env node

import { parseFile } from "./components/parseFile";
import { validateFile } from "./components/validateFile";
import { printResult } from "./components/printResult";

const { Command } = require("commander");
//create the program (instance of Command)
const program = new Command();

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
  .option("-he, --hello [value]", "test hello [name]")
  .parse(process.argv);

//returns object with all program options
const options = program.opts();

//evaluate csv file
const evaluate = async () => {
  if (options.filename) {
    //save the csv fileName from command argument
    const fileName = process.argv[3];

    //read and parse the csv file (addressList is an array of objects)
    const addressList: any = parseFile(fileName);

    //validate the address list with the smarty.com API
    const verifiedList = await validateFile(addressList);
  
    //print the result
    printResult(addressList, verifiedList);
  }  
}

const hello = () =>{ 
  // check if the option has been used the user
  if (options.hello) {
    return process.argv[3];
  }
}

//display help page if no options selected
if (!process.argv.slice(2).length) {
  program.outputHelp();
}