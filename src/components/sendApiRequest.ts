// use smarty.com API to validate information
import { apiObject } from "../types";
import path from "path";
import chalk from "chalk";
require('dotenv').config({path: path.resolve(__dirname, "../../.env")});
const SmartySDK = require("smartystreets-javascript-sdk");
const SmartyCore = SmartySDK.core;
const Lookup = SmartySDK.usStreet.Lookup;
const authId = process.env.AUTH_ID;
const authToken = process.env.AUTH_TOKEN;
const credentials = new SmartyCore.StaticCredentials(authId, authToken);
const clientBuilder = new SmartyCore.ClientBuilder(credentials);
const client = clientBuilder.buildUsStreetApiClient();

// create a lookup batch (in order to process look ups using only one API call) (called from sendApiRequest)
export const createBatchLookUp = (addressList: string[]) => {
  // create new smartycore batch
  const batch = new SmartyCore.Batch(); 
  // create a new lookup from each element of addressList 
  addressList.forEach((record: string) => {
    // record will be shaped based on freeform type request, the entire address is listed under .street property
    // please read the smarty.com API documentation.
    let lookup = new Lookup();
    lookup.street = record;
    lookup.candidates = 1;
    lookup.match = 'enhanced';
    batch.add(lookup);
  })
  return batch;
}

//call API and return result (called from sendApiRequest)
export const callApi = async (lookups: {}): Promise<any[] | void> => {
	try {
    //connect to Api
		const result = await client.send(lookups);
		return result.lookups;
	} 
  catch(err) {
    console.log(chalk.red('Error with API request. Error:', err));
	}
}

//validate the address list
export const sendApiRequest = async (addressList: string[]): Promise<apiObject[] | void> => {
  //create batch
  const batch: {}[] = createBatchLookUp(addressList);
  //send batch to callApi function
  const result: apiObject[] | void = await callApi(batch); 
  //result will either be an array OR undefined
  return result;
};