import { forEachChild } from "typescript";
import { parseFile } from "../../src/components/parseFile";

describe("test parseFile function", () => {
  const validFile = "street,city,zipcode\r\n123 Main St,Anytown,12345";
  const invalidFile = "street,city,zipcode";
  
  it("should return an array of strings", async () => {
    const result = await parseFile(validFile);
    expect(Array.isArray(result)).toEqual(true);
    result!.forEach(record => expect(typeof record).toEqual('string'));
  });

  it("should console.log error message and return undefined", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const result = await parseFile(invalidFile);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Error with parsing file."));
    expect(result).toEqual(undefined);
  });
});