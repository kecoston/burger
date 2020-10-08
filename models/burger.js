var orm = require("../config/orm.js");



const burgers = {
    getBurgers: (callBack) => {
        orm.selectAll("burgers", (res) => {
          callBack(res);
        });
      },
    postABurger: (columns, values, callBack) => {
        orm.insertOne ("burgers", columns, values, (res) => {
            callBack(res)
        });
    },
    putBurger: (objColVals, condition, callBack) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      callBack(res);
    });
  },
    deleteBurger: (condition, callBack) => {
    orm.deleteOne("burgers", condition, (res) => {
      callBack(res);
    });
  }
};



// * Also inside `burger.js`, create the code that will call the ORM 
// functions using burger specific input for the ORM.


module.exports = burgers;
