const express = require("express");
const mustacheExpress = require('mustache-express');
const routes = require("./router");
const morgan = require("morgan");

const app = express();

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./views");

app.use(morgan("combined"));

routes(app);

app.listen(3000);
