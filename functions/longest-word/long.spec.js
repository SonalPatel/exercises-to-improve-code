const long = require("./long");

describe("findlongestword", () => {
  it("should compare the length of two strings and return the longest one", () => {
    const result = findlongestword("sonal", "pete");
    expect(result).toBe(sonal);
  });
});
