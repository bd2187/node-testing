// 3rd party
const request = require("supertest");

// local
const { app } = require("./app");

it("should display hello world", done => {
  request(app)
    .get("/")
    .expect(200)
    .expect("hello world")
    .end(done);
});
