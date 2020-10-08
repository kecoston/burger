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
        var queryString = "INSERT INTO " + tableName;

        queryString += " (";
        queryString += column;
        queryString += ") ";
        queryString += "VALUES (";
        queryString += (value);
        queryString += ") ";

        connection.query(queryString, value, (err, result) => {
            if (err) throw err;
            callBack(err, result)
        });
    },

    updateOne: (tableName, objColVals, condition, callBack) => {
        var queryString = "UPDATE " + tableName;
    
        queryString += " SET ";
        queryString += objColVals;
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          callBack(result);
        });
      },
    

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