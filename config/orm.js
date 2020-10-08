var connection = require("../config/connection.js");

 var printQuestionMarks = (num) => {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

var objToSql = (ob) =>{
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {
    selectAll: (tableInput, callBack) => {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
          callBack(result);
        });
      },

    insertOne: (table, columns, values, callBack) => {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
              }
              callBack(result);
            });
    },

    updateOne: (table, objColVals, condition, callBack) => {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
              }
              callBack(result);
            });
      },

      deleteOne : (table, condition, callBack) => {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
              }
              callBack(result);
            });
      }


};

module.exports = orm;
