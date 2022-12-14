//print result from validation
import { addressList } from "./validateFile";

export const printResult = (addressList: addressList, verifiedList: string[] | Error) => {
  if (Array.isArray(verifiedList))
    for (let i = 0; i < addressList.length; i++) {
      process.stdout.write(addressList[i] + "=>" + verifiedList[i]);
    }
  else 
    process.stdout.write("Error: " + verifiedList);
};