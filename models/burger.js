var orm = require("../config/orm.js");



const burgers = {
    getAllBurgers: (tableName, callBack) => {
        orm.selectAll(tableName, (err, data) => {
            callBack(err, data)
        })
    },

    getABurger: (tableName, burgerName, devoured, callBack) => {
        orm.insertOne(tableName, burgerName, devoured, (err, data) =>{
            callBack(err, data)
        })
    }
}

console.log(burgers)


// * Also inside `burger.js`, create the code that will call the ORM 
// functions using burger specific input for the ORM.


module.exports = burgers;
