var connection = require("../config/connection.js");


var orm = {
    selectAll: function(tableInput, callBack) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            callBack(err, result)

        });
    }

};



module.exports = orm;

// orm.selectAll("burger_name, burgers")
// //GET
// //SELECT * FROM burgers_db
// orm.insertOne("burgers_db")
// //POST
// // INSERT INTO burgers_db
// orm.updateOne("burgers_db")
// //PUT
// //UPDATE