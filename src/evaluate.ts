//evaluate csv file
import { readFile } from "./components/readFile";
import { parseFile } from "./components/parseFile";
import { sendApiRequest } from "./components/sendApiRequest";
import { validateResult } from "./components/validateResult";
import { printResult } from "./components/printResult";

export const evaluate = async () => {
  //save the csv fileName from command argument
  const fileName = process.argv[3];

  //read csv file 
  const csvData = await readFile(fileName);
  
  //check if there is data in the file and end the function
  if (csvData === undefined) 
    return console.log('Invalid .csv file.');
  
  //parse the csv data
  const addressList = parseFile(csvData)!;
  
  if (addressList === undefined)
    return console.log('Invalid .csv file.');

  // send address list to the smarty.com API
  const apiResult = await sendApiRequest(addressList);

  if (apiResult === undefined)
    return console.log('Error with API request. Possible invalid .csv file.');

  // validate the API result
  const verifiedList = validateResult(apiResult);

  if (verifiedList === undefined)
    return console.log('Error with validating API result.');

  // print the result
  printResult(addressList, verifiedList);
}  