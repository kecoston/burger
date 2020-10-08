var orm = require("../config/orm.js");



const burgers = {
    getAllBurgers: (tableName, callBack) => {
        orm.selectAll(tableName, (err, data) => {
            callBack(err, data)
        })
    },

    postABurger: (name, callback) => {
        orm.postOne("burgers", ["burger_name", "devoured"],
        [
        name, false 
        ], callback); 
           
    },

    updateABurger: (tableName, objectColVals, condition, callBack) => {
        orm.updateOne(tableName, objectColVals, condition, (res) => {
            callBack(req, res)
        })
    }

};


module.exports = burgers;
