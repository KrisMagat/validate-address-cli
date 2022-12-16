//print result from validation

//convert object into string
const addressObjectToString = (record: {street: string, city: string, zipcode: string} | string) => {
  if (typeof record !== 'string') {
    const addressString = `${record.street},${record.city},${record.zipcode}`;
    return addressString;
  }
  else 
    return record;
};

export const printResult = (addressList: any[], verifiedList: any[]) => {
  console.log("");
  console.log("Beginning of Records.");
  for (let i = 0; i < addressList.length; i++) {
    //convert records to strings
    const unverifiedAddress = addressObjectToString(addressList[i]);
    const verifiedAddress = verifiedList[i];
    console.log(unverifiedAddress + " => " + JSON.stringify(verifiedList[i]));
  }
  console.log("End of Records.");
  console.log("");
};