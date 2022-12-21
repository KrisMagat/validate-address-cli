import { evaluate } from "../../src/evaluate";

describe("test evaluate function", () => {
  const invalidFile = "";
  const validFile = "test/validMockFile.csv";

  it("should console.log error message and return undefined", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const result = await evaluate(invalidFile);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Invalid"));
    expect(result).toEqual(undefined);
  });

  it("should console.log valid results and return undefined", async () => {
  const consoleSpy = jest.spyOn(console, "log");
  const result = await evaluate(validFile);
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Invalid Address"));
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("1000"));
  expect(result).toEqual(undefined);
  });

});