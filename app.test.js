const request = require("request");

it("should add to a number", () => {
  var result = 2 + 1;
  if (result !== 4) {
    throw new Error(`Expected 4 but got ${result}`);
  }
});
