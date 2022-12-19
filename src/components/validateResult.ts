//evaluate result from API
import { apiObject } from "../types";

//convert object into string (called from validateResult function)
const apiObjectToString = (record: apiObject): string => {
  //save information from result object into variables
  const deliveryLine1 = record.result[0].deliveryLine1;
  const cityName = record.result[0].components.cityName;
  const zipCode = record.result[0].components.zipCode;
  const plus4Code = record.result[0].components.plus4Code;

  //combine all address components
  const validatedAddress = deliveryLine1 + ", " + cityName + ", " + zipCode + "-" + plus4Code;
  return validatedAddress;
}

export const validateResult = (apiResult: apiObject[]): string[] | void => {
  // create verified list from result
  const verifiedList: string[] = apiResult.map((record: apiObject) => {
    //update each API result for printing
    if (record.result[0].analysis.enhancedMatch === "none") {
      return "Invalid Address";
    } 
    else {
      //parse api result object to obtain correct address
      const validatedAddress: string = apiObjectToString(record);
      return validatedAddress;
    }
  });
  //returns an array showing 'Invalid Address' or the validated address to be printed
  return verifiedList;
}