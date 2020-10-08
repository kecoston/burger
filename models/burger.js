var orm = require("../config/orm.js");



const burgers = {
    getAllBurgers: (tableName, callBack) => {
        orm.selectAll(tableName, (err, data) => {
            callBack(err, data)
        })
    },

    postABurger: (tableName, column, value, callBack) => {
        orm.postOne(tableName, column, value, (result) => {
            callBack(result)
        })
    },

};


module.exports = burgers;
