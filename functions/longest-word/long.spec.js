const long = require("./long.js");

describe("findlongestword", () => {
  it("should compare the length of two strings and return the longest one", () => {
    const result = findlongestword("lorem", "loremipsum");
    expect(result).toBe("loremipsum");
  });
});
