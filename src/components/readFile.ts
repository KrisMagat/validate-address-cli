//read csv file
import { promises as fs } from 'fs';
import chalk from "chalk";

// success and error handlers (called from callApi function)
const handleSuccess = (response: Buffer): string => response.toString();
const handleError = (response: unknown): void => console.log(chalk.red('Error with reading file. Error:', response));

//create function to read the file from current directory where file is located
export const readFile = async (fileName: string): Promise<string | void> => {   
  try {
    //success!
    const result: Buffer = await fs.readFile(fileName);
    return handleSuccess(result);
	} 
  catch(err) {
    //error!
		return handleError(err);
	}
}