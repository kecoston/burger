var connection = require("../config/connection.js");


var orm = {
    selectAll: function(tableInput, callBack) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            callBack(err, result)

        });
    },

    insertOne: function(tableInput, column, condition, callBack) {
        var queryString = "INSERT INTO ?? (??) VALUES ??"
        connection.query(queryString, [tableInput, column, condition], function(err, result) {
            if (err) throw err;
            callBack(err,result)
        });

    },

    updateOne: function(tableInput, column, condition, callBack) {
        var queryString = "UPDATE ?? SET ?? WHERE ??"
        connection.query(queryString, [tableInput, column, condition], function(err, results) {
            if(err) throw err;
            callBack(err,result);
        })
    }
    

}


// orm.selectAll("burger_name, burgers")
// //GET
// //SELECT * FROM burgers_db
// orm.insertOne("burgers_db")
// //POST
// // INSERT INTO burgers_db
// orm.updateOne("burgers_db")
// //PUT
// //UPDATE


module.exports = orm;
