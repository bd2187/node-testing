const request = require("supertest");
const { app } = require("./app");

it("should display hello world", done => {
  request(app)
    .get("/")
    .expect(200)
    .expect("hello world")
    .end(done);
});
