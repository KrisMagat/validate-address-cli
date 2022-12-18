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
exports.evaluate = void 0;
//evaluate csv file
const chalk_1 = __importDefault(require("chalk"));
const readFile_1 = require("./components/readFile");
const parseFile_1 = require("./components/parseFile");
const sendApiRequest_1 = require("./components/sendApiRequest");
const validateResult_1 = require("./components/validateResult");
const printResult_1 = require("./components/printResult");
const evaluate = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    //check if there is data in the file and end the function
    if (typeof fileName !== 'string')
        return console.log(chalk_1.default.red('Invalid or missing input.'));
    //read csv file 
    const csvData = yield (0, readFile_1.readFile)(fileName);
    if (csvData === undefined)
        return console.log(chalk_1.default.red('Invalid or missing .csv file.'));
    //parse the csv data
    const addressList = (0, parseFile_1.parseFile)(csvData);
    if (addressList === undefined)
        return console.log(chalk_1.default.red('Invalid or missing .csv file.'));
    // send address list to the smarty.com API
    const apiResult = yield (0, sendApiRequest_1.sendApiRequest)(addressList);
    if (apiResult === undefined)
        return console.log(chalk_1.default.red('Possible invalid file or API credentials.'));
    // validate the API result
    const verifiedList = (0, validateResult_1.validateResult)(apiResult);
    if (verifiedList === undefined)
        return console.log(chalk_1.default.red('Possible invalid file or API credentials.'));
    // print the result
    (0, printResult_1.printResult)(addressList, verifiedList);
});
exports.evaluate = evaluate;
//# sourceMappingURL=evaluate.js.map