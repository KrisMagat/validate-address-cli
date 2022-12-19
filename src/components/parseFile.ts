//parse the csv file
import chalk from "chalk";

//create function to parse the file
export const parseFile = (fileData: string): string[] | void => {

  //convert fileData to array
  const dataArray: string[] = fileData.split('\r\n');

  //check that the list is not empty
  if (dataArray.length > 1) {
    //create address list (removing headers)
    const addressList: string[] = [];

    //iterate thru each record and add to list
    dataArray.slice(1).forEach((record) => {
      //check if record is not empty before adding to address list
      if (record)
        addressList.push(record);
     });

    return addressList;
}
  else 
    console.log(chalk.red(`Error with parsing file. Please ensure the .csv file is in the correct format.`));
};