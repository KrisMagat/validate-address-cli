//evaluate result from API

export const validateResult = (apiResult: any[]) => {
  // create verified list from result
  const verifiedList: string[] = apiResult.map((record: any) => {
    //update each API result for printing
    if (record.result.length < 1) {
      return "Invalid Address";
    } 
    else {
      //parse api result object to obtain correct address
      const primaryNumber = record.result[0].components.primaryNumber;
      const streetPredirection = record.result[0].components.streetPredirection || "";
      const streetName = record.result[0].components.streetName;
      const streetSuffix = record.result[0].components.streetSuffix;
      const streetPostdirection = record.result[0].components.streetPostdirection || "";
      const cityName = record.result[0].components.cityName;
      const zipCode = record.result[0].components.zipCode;
      const plus4Code = record.result[0].components.plus4Code;
      const validatedAddress = 
        `${primaryNumber+streetPredirection+streetName+streetSuffix+streetPostdirection+cityName+zipCode`;
      return validatedAddress;
    }
  });
  //returns an array showing 'Invalid Address' or the corrected address to be printed
  return verifiedList;
}