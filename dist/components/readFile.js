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
exports.readFile = void 0;
//read csv file
const fs_1 = require("fs");
//create function to read the file from current directory where file is located
const readFile = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileData = yield fs_1.promises.readFile(fileName);
        return fileData.toString();
    }
    catch (err) {
        console.log(`Got an error trying to read the file: ${err}`);
    }
});
exports.readFile = readFile;
//# sourceMappingURL=readFile.js.map