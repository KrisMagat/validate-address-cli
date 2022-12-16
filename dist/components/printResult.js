"use strict";
//print result from input object and api validation
Object.defineProperty(exports, "__esModule", { value: true });
exports.printResult = void 0;
//convert object into string (called from printResult function)
const addressObjectToString = (record) => {
    return `${record.street},${record.city},${record.zipcode}`;
};
const printResult = (addressList, verifiedList) => {
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
exports.printResult = printResult;
//# sourceMappingURL=printResult.js.map