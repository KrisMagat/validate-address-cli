"use strict";
//evaluate result from API
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResult = void 0;
const validateResult = (apiResult) => {
    // create verified list from result
    const verifiedList = apiResult.map((record) => {
        //update each API result for printing
        if (record.result.length < 1) {
            return "Invalid Address";
        }
        else {
            //parse api result object to obtain correct address
            const primaryNumber = `${record.result[0].components.primaryNumber}`;
            const streetPredirection = ` ${record.result[0].components.streetPredirection || ""}`;
            const streetName = ` ${record.result[0].components.streetName}`;
            const streetSuffix = ` ${record.result[0].components.streetSuffix}`;
            const streetPostdirection = ` ${record.result[0].components.streetPostdirection || ""}`;
            const cityName = `, ${record.result[0].components.cityName}`;
            const zipCode = `, ${record.result[0].components.zipCode}-${record.result[0].components.plus4Code}`;
            const validatedAddress = primaryNumber + streetPredirection + streetName + streetSuffix + streetPostdirection + cityName + zipCode;
            return validatedAddress;
        }
    });
    //returns an array showing 'Invalid Address' or the corrected address to be printed
    return verifiedList;
};
exports.validateResult = validateResult;
//# sourceMappingURL=validateResult.js.map