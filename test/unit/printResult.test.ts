import { printResult } from "../../src/components/printResult";

describe("test printResult function", () => {
  const validAddressList = ["string1", "string2"];
  const validVerifiedList = ["string1", "Invalid Address"];
  
  it("should console.log expected output", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const result = printResult(validAddressList, validVerifiedList);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("string1"));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Invalid Address"));
    expect(result).toEqual(undefined);
  });
});