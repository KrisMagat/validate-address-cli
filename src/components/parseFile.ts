//parse the csv file
import chalk from "chalk";
import { addressObject } from "../types";

//create function to parse the file
export const parseFile = (fileData: string): addressObject[] | void => {
  //expected headers
  const headers = ['street', 'city', 'zipcode'];

  //convert fileData to array
  const dataArray: string[] = fileData.split('\r\n');
  //check file headers if they match and that the list is not empty
  if (dataArray[0] === headers.join(',') && dataArray.length > 1) {
    //convert each element to an object
    const addressList: addressObject[] | any[] = dataArray.slice(1).map(element => {
      //split element string into record array
      const record: string[] = element.split(',');
      //convert record array into object using headers as keys  
      const object: {} = headers.reduce((object, header, idx) => {
        return {...object, [header]: record[idx]};
      },{});
      return object;
    });
    return addressList;
}
  else 
    console.log(chalk.red(`Got an error trying to parse the file. Please ensure the .csv file is in the correct format.`));
};