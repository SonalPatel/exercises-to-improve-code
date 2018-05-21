const subtract = require("./subtract");

describe("subtract", () => {
  it("should subtract one number from another", () => {
    const result = subtract(10, 2);
    expect(result).toBe(8);
  });
});
