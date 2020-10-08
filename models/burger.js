var orm = require("../config/orm.js");



const burgers = {
    getAllBurgers: (tableName, callBack) => {
        orm.selectAll(tableName, (err, data) => {
            callBack(err, data)
        })
    },

};


module.exports = burgers;
