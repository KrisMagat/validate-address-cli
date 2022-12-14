// use smarty.com API to validate information
const SmartySDK = require("smartystreets-javascript-sdk");
const SmartyCore = SmartySDK.core;
const Lookup = SmartySDK.usStreet.Lookup;
const authId = process.env.AUTH_ID;
const authToken = process.env.AUTH_TOKEN;
const credentials = new SmartyCore.StaticCredentials(authId, authToken);

// this is the shape of addressObject (for Typescript)
type addressObject = {
  street: string,
  city: string,
  zipCode: string
} | null;
// this is the shape of addressList (for Typescript)
type addressList = addressObject[];




//create a look up batch (in order to process look ups using only one API call)
const createBatchLookUp = (addressList: addressList) => {
  //create new smartycore batch
  const batch = new SmartyCore.Batch(); 
  //record is an addressObject type, create a new lookup from record 
  addressList.forEach(record, async () => {
    const lookup = new Lookup();
    lookup.street = record.street;
    lookup.city = record.city;
    lookup.zipCode = record.zipCode;
    lookup.match = 'strict';  
    // add to batch
    batch.add(lookup)
  })
  return batch;
}



export const validateFile = (addressList: addressList) => {
  //create batch
  const batch = createBatchLookUp(addressList);
  
  //

  return verifiedList;
};