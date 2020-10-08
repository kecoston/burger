var connection = require("../config/connection.js");


var orm = {
    selectAll: (tableInput, callBack) => {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            callBack(err, result)

        });
    },

    postOne: (tableName, column, value, callBack) => {
        var queryString = "INSERT INTO" + tableName 
            queryString += ({column})
            quqeryString += "values (??)";
        connection.query(queryString, value, (err, result) => {
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