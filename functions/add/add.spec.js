// import add from './add'; (use this when using react)
const add = require("./add");

describe("add.js", () => {
  it("should add two numbers together", () => {
    const result = add(100, 10);
    expect(result).toBe(110);
  });
});
