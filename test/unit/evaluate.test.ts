import { evaluate } from "../../src/evaluate";

describe("test evaluate function", () => {
  const invalidFile = "";
  
  it("should console.log error message and return undefined", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const result = await evaluate(invalidFile);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Invalid"));
    expect(result).toEqual(undefined);
  });
});