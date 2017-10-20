// 3rd party
const request = require("supertest");
const expect = require("expect");

// local
const { app } = require("./app");

describe("HTTP Route Tests", () => {
  it("should display hello world", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect("hello world")
      .end(done);
  });

  /*
    Run test on error route. Check if res.status === 400
    Check if response's body contains error message
  */
  it("should display error object", done => {
    request(app)
      .get("/error")
      .expect(404)
      .expect(res => {
        expect(res.body).toEqual({ error: "Sorry, page not found" });
      })
      .end(done);
  });
});

describe("Playground Tests", () => {
  it("should add to a number", () => {
    var result = 4 + 4;
    expect(result)
      .toBe(8)
      .toBeA("number");
  });

  it("should asynchronously add to a number", done => {
    const asyncAdd = function(a, b, cb) {
      setTimeout(() => {
        var sum = a + b;
        cb(sum);
      }, 1000);
    };

    asyncAdd(2, 3, sum => {
      expect(sum)
        .toBe(5)
        .toBeA("number");
      done();
    });
  });
});
