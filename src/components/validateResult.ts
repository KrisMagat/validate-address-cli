//evaluate result from API

//convert object into string (called from validateResult function)
const apiObjectToString = (record: { result: {
  deliveryLine1: string; components: {
  cityName: string; zipCode: string; plus4Code: string; 
}; 
}[]; }) => {
  const deliveryLine1 = record.result[0].deliveryLine1;
  const cityName = record.result[0].components.cityName;
  const zipCode = record.result[0].components.zipCode;
  const plus4Code = record.result[0].components.plus4Code;

  //combine all address components
  const validatedAddress = deliveryLine1 + ", " + cityName + ", " + zipCode + "-" + plus4Code;
  return validatedAddress;
}

export const validateResult = (apiResult: any[]) => {
  // create verified list from result
  const verifiedList: string[] = apiResult.map((record: any) => {
    //update each API result for printing
    if (record.result[0].analysis.enhancedMatch === "none") {
      return "Invalid Address";
    } 
    else {
      //parse api result object to obtain correct address
      const validatedAddress = apiObjectToString(record);
      return validatedAddress;
    }
  });
  //returns an array showing 'Invalid Address' or the corrected address to be printed
  return verifiedList;
}