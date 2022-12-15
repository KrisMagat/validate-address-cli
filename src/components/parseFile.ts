//parse the csv file

//create function to parse the file
export const parseFile = (fileData: string) => {
  //expected headers
  const headers = ['street', 'city', 'zipcode'];
  //convert fileData to array
  const dataArray = fileData.split('\r\n');
  //check file headers if they match
  if (dataArray[0] === headers.join(',')) {
    //convert each element to an object
    const addressList = dataArray.slice(1).map(element => {
      //split element string into record array
      const record = element.split(',');
      //convert record array into object using headers as keys  
      const object = headers.reduce((object, header, idx)=> {
        return {...object, [header]: record[idx]};
      },{});
      return object;
    });
    return addressList;
  }
  else 
    console.log(`Got an error trying to parse the file. Please ensure the .csv file is in the correct format.`);
};