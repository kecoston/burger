var express = require("express");
const { getAllBurgers } = require("../models/burger.js");
var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", (req, res) => {
  burger.getAllBurgers("burgers", (err, data) => {
    res.render("index", { burger: data })
  })
})

router.post("/burgers/create", (req, res) => {
  burger.postABurger("burgers", "burger_name", req.params.data, function (result) {
    console.log(result);
    res.redirect("/");
  });
});


router.put("/burgers/create/:id", (res) => {

  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
