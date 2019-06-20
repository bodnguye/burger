// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, result) {
            if (err) throw err;
            cb(result)
        })
    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;
