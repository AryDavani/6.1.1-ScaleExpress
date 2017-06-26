const homeController = require("./controllers/home-controller");
const dogController = require("./controllers/dog-controller");
const express = require("express");
const helpers = require("./helpers");


module.exports = function(app){
  const homeRouter = express.Router();
  const appRouter = express.Router();
  // /home/
  // /home/about
  // /home/contact
  homeRouter.get("/", homeController.index);
  homeRouter.get("/about", homeController.about);
  homeRouter.get("/contact", homeController.contact);
  homeRouter.get("/taylor", homeController.taylor);

  // /app/dog
  // /app/dog/:id
  appRouter.get("/dog/", dogController.list);
  appRouter.get("/dog/:id", helpers.debugMiddleware, dogController.detail);

  app.use('/', homeRouter);
  app.use('/app', appRouter);
};
