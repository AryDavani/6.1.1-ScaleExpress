const express = require("express");
const mustacheExpress = require('mustache-express');
const homeController = require("./controllers/home-controller");
const dogController = require("./controllers/dog-controller");
const app = express();

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./views");

app.get("/", homeController.index);
app.get("/about", homeController.about);
app.get("/contact", homeController.contact);

app.get("/dog/", dogController.list);
app.get("/dog/:id", dogController.detail);

app.listen(3000);
