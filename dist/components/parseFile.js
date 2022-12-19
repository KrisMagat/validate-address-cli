"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFile = void 0;
//parse the csv file
const chalk_1 = __importDefault(require("chalk"));
//create function to parse the file
const parseFile = (fileData) => {
    //convert fileData to array
    const dataArray = fileData.split('\r\n');
    //check that the list is not empty
    if (dataArray.length > 1) {
        //create address list (removing headers)
        const addressList = [];
        //iterate thru each record and add to list
        dataArray.slice(1).forEach((record) => {
            //check if record is not empty before adding to address list
            if (record)
                addressList.push(record);
        });
        return addressList;
    }
    else
        console.log(chalk_1.default.red(`Error with parsing file. Please ensure the .csv file is in the correct format.`));
};
exports.parseFile = parseFile;
//# sourceMappingURL=parseFile.js.map