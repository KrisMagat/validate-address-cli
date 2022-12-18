//read csv file
import { promises as fs } from 'fs';
import chalk from "chalk";

// success and error handlers (called from callApi function)
const handleSuccess = (response: Buffer) => response.toString();
const handleError = (response: unknown) => console.log(chalk.red('Error with reading file. Error:', response));

//create function to read the file from current directory where file is located
export const readFile = async (fileName: string) => {   

  try {
    //success!
    const result = await fs.readFile(fileName);
    return handleSuccess(result);
	} 
  catch(err) {
    //error!
		return handleError(err);
	}
}