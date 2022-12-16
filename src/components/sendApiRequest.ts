// use smarty.com API to validate information
import path from "path";
import { addressObject } from "../types";
require('dotenv').config({path: path.resolve(__dirname, "../../.env")});
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
const createBatchLookUp = (addressList: any[]) => {
  //create new smartycore batch
  const batch = new SmartyCore.Batch(); 
  //create a new lookup from each element of addressList 
  //record will be shaped based on type of request (ie. freeform or multiple properties); please read the smarty.com API documentation.
  addressList.forEach((record: { street: string; city: string; zipcode: string; }) => {
    let lookup = new Lookup();
    lookup.street = record.street;
    lookup.lastLine = `${record.city} ${record.zipcode}`
    lookup.candidates = 1;
    batch.add(lookup);
  })
  return batch;
}

// send API request and handle response
//this function is being called from validateFile
const handleSuccess = (response: { lookups: any }) => {
  return response.lookups;
};
const handleError = (response: unknown) => response;
const callApi = async (lookups: any) => {
	try {
		const result = await client.send(lookups);
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