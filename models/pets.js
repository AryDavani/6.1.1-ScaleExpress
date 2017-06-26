
module.exports = {
  data: [
    {id: 1, name: "peanut", age: 12},
    {id: 2, name: "kepler", age: 4},
    {id: 3, name: "bird", age: 10}
  ],
  findOne: function (id) {
    return this.data.find(function(item) {
      return item.id == id;
    });
  },
  all: function () {
    return this.data;
  }
};
