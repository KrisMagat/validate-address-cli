//read and parse csv file
import fs from 'fs';
import { parse }  from 'csv-parse';

export const parseFile = (filePath: string) => {
  const csvData = fs.readFile(__dirname, (err, data)=>{
    if(err) throw err;
    return parse(data);
  })
  return csvData;
};