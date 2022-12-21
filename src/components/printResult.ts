//print result from input object and api validation
import chalk from "chalk";

//apply color to original address (called from printResult function)
const originalAddressToPrint = (record: string): string => {
  const originalAddress = chalk.cyan(record);
  return originalAddress;
};

//apply color to verified address called from printResult function)
const verifiedAddressToPrint = (record: string): string => {
  const verifiedAddress = record === 'Invalid Address' ? chalk.red(record) : chalk.green(record);
  return verifiedAddress;
};

//print results
export const printResult = (addressList: string[], verifiedList: string[]): void => {
  //print the beginning of output
  console.log("");
  console.log("");
  console.log(chalk.yellow.inverse.bold("Beginning of Records."));
  console.log("");

  //iterate through list to print each result
  for (let i = 0; i < addressList.length; i++) {
    //prep original records to be printed
    const originalAddress: string = originalAddressToPrint(addressList[i]);

    //prep verified records to be printed
    const verifiedAddress: string = verifiedAddressToPrint(verifiedList[i]);
    
    //print the validation results
    console.log(originalAddress + chalk.magenta("  ->  ") + verifiedAddress);
  }

  //print the end of output
  console.log("");
  console.log(chalk.yellow.inverse.bold("End of Records."));
  console.log("");
  console.log("");
};