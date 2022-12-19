import { sendApiRequest } from "../../src/components/sendApiRequest";
import { apiObject } from "../../src/types";

const validatedAddressList: apiObject[] = [{ 
  result: [{
    deliveryLine1: "123 Main St",
    components: { cityName: "Anytown",zipCode: "12345", plus4Code: "6789" },
    analysis: { enhancedMatch: 'usps-address'}
    }]
  }];

describe("test sendApiRequest function", () => {
  //first record is invalid, second record is valid
  const addressList = ["123 Main St,Anytown,12345", "1000 Van Ness, San Francisco, 94109" ];

  it("should return an apiObject type", async () => {
    const result = await sendApiRequest(addressList);
    expect(Array.isArray(result)).toEqual(true);
    result!.forEach(record => expect(Array.isArray(record.result)).toEqual(true));
  });
  
});