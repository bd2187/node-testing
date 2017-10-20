module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.get("/error", (req, res) => {
    res.status(404).send({ error: "Sorry, page not found" });
  });
};
