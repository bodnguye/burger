// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },

    updateOne: function(id, cb) {
        orm.updateOne('burgers', id, cb);
    }
}

module.exports = burger;