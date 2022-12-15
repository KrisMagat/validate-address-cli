//evaluate result from API

export const validateResult = (result: any | undefined) => {
  //create verified list from result
  const verifiedList = result.map((record: any) => {
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
}