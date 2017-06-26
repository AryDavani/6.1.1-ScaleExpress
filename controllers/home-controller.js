
module.exports = {
  index: (req, res) => {
    res.send("Hello From Controller Joel!");
  },
  about: (req, res) => {
    res.send("About what?");
  },
  contact: (req, res) => {
    res.send("Don't contact me");
  },
  taylor: (req, res) => {
    console.log(req.awesomeDude);
    res.send("Trouble trouble trouble");
  }
};
