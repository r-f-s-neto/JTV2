import { createArray } from "./createArray";

describe("createArray tests", () => {
  it("should create an array", () => {
    const result = createArray(2);
    expect(result).toStrictEqual([1, 2]);
  });
});
