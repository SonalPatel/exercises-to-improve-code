const isSameWord = require("./string-is-same.js");

describe("isTheSameWord", () => {
  it("should check if one string is equal to another and result in true or false", () => {
    const result = isSameWord("word1", "word2");
    expect(result).toBe(false);
  });
  it("should check if one string is equal to another and result in true or false", () => {
    const result = isSameWord("word1", "word1");
    expect(result).toBe(true);
  });
});
