"use strict";
//print result from validation
Object.defineProperty(exports, "__esModule", { value: true });
exports.printResult = void 0;
//convert object into string
const addressObjectToString = (record) => {
    if (typeof record !== 'string') {
        const addressString = `${record.street}, ${record.city} ${record.zipcode}`;
        return addressString;
    }
    else
        return record;
};
const printResult = (addressList, verifiedList) => {
    console.log("Beginning of Records.");
    for (let i = 0; i < addressList.length; i++) {
        //convert records to strings
        const unverifiedAddress = addressObjectToString(addressList[i]);
        const verifiedAddress = addressObjectToString(verifiedList[i]);
        // console.log(unverifiedAddress + " => " + JSON.stringify(verifiedList[i]));
    }
    console.log("End of Records.");
};
exports.printResult = printResult;
//# sourceMappingURL=printResult.js.map