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
    //expected headers
    const headers = ['street', 'city', 'zipcode'];
    //convert fileData to array
    const dataArray = fileData.split('\r\n');
    //check file headers if they match and that the list is not empty
    if (dataArray[0] === headers.join(',') && dataArray.length > 1) {
        //convert each element to an object
        const addressList = dataArray.slice(1).map(element => {
            //split element string into record array
            const record = element.split(',');
            //convert record array into object using headers as keys  
            const object = headers.reduce((object, header, idx) => {
                return Object.assign(Object.assign({}, object), { [header]: record[idx] });
            }, {});
            return object;
        });
        return addressList;
    }
    else
        console.log(chalk_1.default.red(`Got an error trying to parse the file. Please ensure the .csv file is in the correct format.`));
};
exports.parseFile = parseFile;
//# sourceMappingURL=parseFile.js.map