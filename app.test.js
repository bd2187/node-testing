// 3rd party
const request = require("supertest");
const expect = require("expect");

// local
const { app } = require("./app");

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
