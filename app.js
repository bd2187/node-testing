// 3rd party
var express = require("express");
var app = express();

// local
var routes = require("./controllers");
routes(app);

// Set up port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now listening to port: ${PORT}`));

// export app and import to app.test.js
module.exports = { app };
