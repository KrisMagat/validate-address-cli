//print result from input object and api validation

//convert object into string (called from printResult function)
const addressObjectToString = (record: { street: string; city: string; zipcode: string; }) => {
    return `${record.street},${record.city},${record.zipcode}`;
};

export const printResult = (addressList: any[], verifiedList: string[]) => {
  //print the beginning of output
  console.log("");
  console.log("Beginning of Records.");
  for (let i = 0; i < addressList.length; i++) {
    //convert records to strings
    const unverifiedAddress = addressObjectToString(addressList[i]);
    const verifiedAddress = verifiedList[i];
    //print the validation results
    console.log(unverifiedAddress + " => " + verifiedAddress);
  }
  //print the end of output
  console.log("End of Records.");
  console.log("");
};