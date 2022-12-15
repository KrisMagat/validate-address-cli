// use smarty.com API to validate information
import { config } from 'dotenv';
const SmartySDK = require("smartystreets-javascript-sdk");
const SmartyCore = SmartySDK.core;
const Lookup = SmartySDK.usStreet.Lookup;
const authId = process.env.AUTH_ID;
const authToken = process.env.AUTH_TOKEN;
const credentials = new SmartyCore.StaticCredentials(authId, authToken);
const clientBuilder = new SmartyCore.ClientBuilder(credentials);
const client = clientBuilder.buildUsStreetApiClient();

console.log(authId, authToken);

//create a lookup batch (in order to process look ups using only one API call)
//this function is being called from validateFile
const createBatchLookUp = (addressList: {}[]) => {
  //create new smartycore batch
  const batch = new SmartyCore.Batch(); 
  //create a new lookup from each element of addressList
  addressList.forEach((record: {}) => {
    let lookup = new Lookup();
    lookup = {...lookup, match: "strict", candidates: 1, ...record}
    batch.add(lookup);
  })
  return batch;
}

// send API request and handle response
//this function is being called from validateFile
const handleSuccess = (response: { lookups: any }) => response.lookups;
const handleError = (response: unknown) => response;
const callApi = async (lookup: any) => {
	try {
		const result = await client.send(lookup);
		return handleSuccess(result);
	} catch(err) {
		return handleError(err);
	}
}

//validate the address list
export const sendApiRequest = async (addressList: {}[]) => {
  //create batch
  const batch = createBatchLookUp(addressList);
  //send batch to API
  const result = await callApi(batch); 
  return result;
};