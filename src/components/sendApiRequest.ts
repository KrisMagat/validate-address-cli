// use smarty.com API to validate information
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
    lookup.match = 'enhanced';
    batch.add(lookup);
  })

  return batch;
}

// success and error handlers (called from callApi function)
const handleSuccess = (response: { lookups: any }) => response.lookups;
const handleError = (response: unknown) => console.log(chalk.red('Error with API request. Error:', response));

//call API and return result
//this function is being called from sendApiRequest function
const callApi = async (lookups: any) => {
	try {
    //connect to Api
		const result = await client.send(lookups);
    //success!
		return handleSuccess(result);
	} 
  catch(err) {
    //error!
		return handleError(err);
	}
}

//validate the address list
export const sendApiRequest = async (addressList: {}[]) => {
  //create batch
  const batch = createBatchLookUp(addressList);
  //send batch to callApi function
  const result = await callApi(batch); 
  //result will either be an array OR undefined
  return result;
};