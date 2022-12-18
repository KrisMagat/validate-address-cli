"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printResult = void 0;
//print result from input object and api validation
const chalk_1 = __importDefault(require("chalk"));
//convert original address into string with color applied (called from printResult function)
const originalAddressToPrint = (record) => {
    const originalAddress = chalk_1.default.cyan(`${record.street},${record.city},${record.zipcode}`);
    return originalAddress;
};
//convert original address into string with color applied (called from printResult function)
const verifiedAddressToPrint = (record) => {
    const verifiedAddress = record === 'Invalid Address' ? chalk_1.default.red(record) : chalk_1.default.green(record);
    return verifiedAddress;
};
//print results
const printResult = (addressList, verifiedList) => {
    //print the beginning of output
    console.log("");
    console.log("");
    console.log(chalk_1.default.yellow.inverse.bold("Beginning of Records."));
    console.log("");
    //iterate through list to print each result
    for (let i = 0; i < addressList.length; i++) {
        //prep original records to be printed
        const originalAddress = originalAddressToPrint(addressList[i]);
        //prep verified records to be printed
        const verifiedAddress = verifiedAddressToPrint(verifiedList[i]);
        //print the validation results
        console.log(originalAddress + chalk_1.default.magenta("  =>  ") + verifiedAddress);
    }
    //print the end of output
    console.log("");
    console.log(chalk_1.default.yellow.inverse.bold("End of Records."));
    console.log("");
    console.log("");
};
exports.printResult = printResult;
//# sourceMappingURL=printResult.js.map