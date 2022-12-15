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
  
  //check if there is data in the file
  if (csvData !== undefined) {
    //parse the csv data
    const addressList = parseFile(csvData)!;
   
    // send address list to the smarty.com API
    const apiResult = await sendApiRequest(addressList);

    // validate the API result
    const verifiedList = validateResult(apiResult);
    
    // print the result
    printResult(addressList, verifiedList);
  }
}  