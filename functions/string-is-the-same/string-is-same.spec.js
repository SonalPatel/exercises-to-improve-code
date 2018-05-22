const isSameWord = require("./string-is-same.js");

describe("isTheSameWord", () => {
  it("should return false when the words are not the same", () => {
    const result = isSameWord("word1", "word2");
    expect(result).toBe(false);
  });
  it("should return false when the words are not the same", () => {
    const result = isSameWord("word1", "word1");
    expect(result).toBe(true);
  });
});
