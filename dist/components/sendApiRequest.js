"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendApiRequest = void 0;
// use smarty.com API to validate information
const path_1 = __importDefault(require("path"));
require('dotenv').config({ path: path_1.default.resolve(__dirname, "../../.env") });
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
const createBatchLookUp = (addressList) => {
    //create new smartycore batch
    const batch = new SmartyCore.Batch();
    //create a new lookup from each element of addressList
    addressList.forEach((record) => {
        let lookup = new Lookup();
        lookup = Object.assign(Object.assign(Object.assign({}, lookup), { match: "invalid", candidates: 1 }), record);
        batch.add(lookup);
    });
    return batch;
};
// send API request and handle response
//this function is being called from validateFile
const handleSuccess = (response) => {
    return response.lookups;
};
const handleError = (response) => response;
const callApi = (lookups) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield client.send(lookups);
        return handleSuccess(result);
    }
    catch (err) {
        return handleError(err);
    }
});
//validate the address list
const sendApiRequest = (addressList) => __awaiter(void 0, void 0, void 0, function* () {
    //create batch
    const batch = createBatchLookUp(addressList);
    //send batch to API
    const result = yield callApi(batch);
    return result;
});
exports.sendApiRequest = sendApiRequest;
//# sourceMappingURL=sendApiRequest.js.map