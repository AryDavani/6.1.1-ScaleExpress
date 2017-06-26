
module.exports = {
  index: (req, res) => {
    res.send("Hello From Controller Joel!");
  },
  about: (req, res) => {
    res.send("About what?");
  },
  contact: (req, res) => {
    res.send("Don't contact me");
  }
};
