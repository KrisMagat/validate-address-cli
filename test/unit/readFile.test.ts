import { readFile } from "../../src/components/readFile";

describe("test readFile function", () => {
  const validFile = "validMockfile.csv";
  const missingFile = "missingMockfile.csv";
  
  it("should return a string", async () => {
    expect(typeof (await readFile(validFile))).toEqual("string");
  });

  it("should console.log error message and return undefined", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const result = await readFile(missingFile);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Error with reading file."));
    expect(result).toEqual(undefined);
  });
});