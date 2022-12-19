//read csv file
import { promises as fs } from 'fs';
import chalk from "chalk";

//create function to read the file from current directory where file is located
export const readFile = async (fileName: string): Promise<string | void> => {   
  try {
    const result: Buffer = await fs.readFile(fileName);
    return result.toString();
	} 
  catch(err) {
    console.log(chalk.red('Error with reading file. Error:', err));
	}
}