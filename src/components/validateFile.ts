// use smarty.com API to validate information
const SmartySDK = require("smartystreets-javascript-sdk");
const SmartyCore = SmartySDK.core;
const Lookup = SmartySDK.usStreet.Lookup;
const authId = process.env.AUTH_ID;
const authToken = process.env.AUTH_TOKEN;
const credentials = new SmartyCore.StaticCredentials(authId, authToken);
const clientBuilder = new SmartyCore.ClientBuilder(credentials);
const client = clientBuilder.buildUsStreetApiClient();


// this is the shape of addressObject (for Typescript)
export type addressObject = {
  street: string,
  city: string,
  zipCode: string
};
// this is the shape of addressList (for Typescript)
export type addressList = addressObject[];


//create a lookup batch (in order to process look ups using only one API call)
//this function is being called from validateFile
const createBatchLookUp = (addressList: addressList) => {
  //create new smartycore batch
  const batch = new SmartyCore.Batch(); 
  //create a new lookup from each element of addressList
  addressList.forEach((record: addressObject) => {
    let lookup = new Lookup();
    lookup.street = record.street;
    lookup.city = record.city;
    lookup.zipCode = record.zipCode;
    lookup.match = "strict";
    batch.add(lookup);
  })
  return batch;
}

// send API call and handle responses
//this function is being called from validateFile
const handleSuccess = (response: { lookups: any }) => response.lookups;
const handleError = (response: unknown) => response;
const handleResponse = async (lookup: any) => {
	try {
		const result = await client.send(lookup);
		return handleSuccess(result);
	} catch(err) {
		return handleError(err);
	}
}

//validate the address list
export const validateFile = async (addressList: addressList) => {
  //create batch
  const batch = createBatchLookUp(addressList);
  //validate batch
  const verifiedList = await handleResponse(batch); 
  return verifiedList;
};