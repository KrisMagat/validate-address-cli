"use strict";
//evaluate result from API
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResult = void 0;
const validateResult = (result) => {
    //create verified list from result
    const verifiedList = result.map((record) => {
        //update result to 
        if (!record) {
            return 'Invalid Address';
        }
        else {
            const validatedAddress = `${record.delivery_line_1}, ${record.components.city_name}, ${record.components.zipcode}-${record.components.plus4_code}`;
            return validatedAddress;
        }
    });
    return verifiedList;
};
exports.validateResult = validateResult;
//# sourceMappingURL=validateResult.js.map