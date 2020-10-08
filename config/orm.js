var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
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
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            callBack(err, result)

        });
    },

    postOne: (tableName, column, value, callBack) => {
        var queryString = "INSERT INTO " + tableName;

        queryString += " (";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(value);
        queryString += ") ";

        connection.query(queryString, value, (err, result) => {
            if (err) throw err;
            callBack(err, result)
        });
    },

    updateOne: (tableName, objColVals, condition, callBack) => {
        var queryString = "UPDATE " + tableName;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);;
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