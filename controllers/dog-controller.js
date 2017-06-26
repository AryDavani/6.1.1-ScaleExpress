const Pets = require("../models/pets");

module.exports = {
  list: (req, res) => {
    res.render("dog/list", {model: Pets.all()});
  },
  detail: (req, res) => {
    const dogId = req.params.id;
    const pet = Pets.findOne(dogId);
    res.render("dog/detail", {model: pet});
  }
};
