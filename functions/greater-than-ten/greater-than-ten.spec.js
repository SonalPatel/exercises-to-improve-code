const checkValue = require("./greater-than-ten");
describe("greater-than-ten", () => {
  it("should return true if greater 10", () => {
    const result = checkValue(55);
    expect(result).toBe(true);
  });
});
