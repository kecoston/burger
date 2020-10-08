var orm = require("../config/orm.js");



const burgers = {
    getAllBurgers: (tableName, callBack) => {
        orm.selectAll(tableName, (err, data) => {
            callBack(err, data)
        })
    },

    postABurger: (tableName, column, value, callBack) => {
        orm.postOne(tableName, column, value, (req, data) => {
            callBack(req, data)
        })
    },

    updateABurger: (tableName, objectColVals, condition, callBack) => {
        orm.updateOne(tableName, objectColVals, condition, (res) => {
            callBack(res)
        })
    }

};


module.exports = burgers;
