//read csv file
import { promises as fs } from 'fs';

//create function to read the file from current directory where file is located
export const readFile = async (fileName: string) => {
  try {
    const fileData = await fs.readFile(fileName);
    return fileData.toString();
  } catch (err) {
    console.log(`Got an error trying to read the file: ${err}`);
  }
}