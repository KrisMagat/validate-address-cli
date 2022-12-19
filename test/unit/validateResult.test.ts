import { validateResult } from "../../src/components/validateResult";
import { apiObject } from "../../src/types";

describe("test validateResult function", () => {
  const validatedAddressList: apiObject[] = [
  { result: [{
    deliveryLine1: "123 Main St",
    components: { cityName: "Anytown",zipCode: "12345", plus4Code: "6789" },
    analysis: { enhancedMatch: "usps-address"}
    }]
  },
  { result: [{
    deliveryLine1: "",
    components: { cityName: "",zipCode: "", plus4Code: "" },
    analysis: { enhancedMatch: "none"}
    }]
  },    
  ];

  const verifiedList = validateResult(validatedAddressList); 

  it("should return an array of strings", () => {
    expect(Array.isArray(verifiedList) && typeof verifiedList[0] === "string").toEqual(true);
  });

  // it("should return a string for Invalid Address", () => {
  //   expect(verifiedList[1]).toEqual('Invalid Address');
  // });

  // it("should console.log error message and return undefined", () => {
  //   const consoleSpy = jest.spyOn(console, "log");
  //   const result = await readFile(missingFile);
  //   expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Error with reading file."));
  //   expect(result).toEqual(undefined);
  // });
});