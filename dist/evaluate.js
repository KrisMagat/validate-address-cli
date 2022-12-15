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
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = void 0;
//evaluate csv file
const readFile_1 = require("./components/readFile");
const parseFile_1 = require("./components/parseFile");
const sendApiRequest_1 = require("./components/sendApiRequest");
const validateResult_1 = require("./components/validateResult");
const printResult_1 = require("./components/printResult");
const evaluate = () => __awaiter(void 0, void 0, void 0, function* () {
    //save the csv fileName from command argument
    const fileName = process.argv[3];
    //read csv file 
    const csvData = yield (0, readFile_1.readFile)(fileName);
    //check if there is data in the file
    if (csvData !== undefined) {
        //parse the csv data
        const addressList = (0, parseFile_1.parseFile)(csvData);
        // send address list to the smarty.com API
        const apiResult = yield (0, sendApiRequest_1.sendApiRequest)(addressList);
        // validate the API result
        const verifiedList = (0, validateResult_1.validateResult)(apiResult);
        // print the result
        (0, printResult_1.printResult)(addressList, verifiedList);
    }
});
exports.evaluate = evaluate;
//# sourceMappingURL=evaluate.js.map