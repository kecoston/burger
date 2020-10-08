var express = require("express");
var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", (req, res) => {
  burger.getAllBurgers("burgers", (err, data) => {
    res.render("index", { burger: data })
  })
})

router.post("/burgers/create", (req, res) => {
  burger.postABurger("burgers", "burger_name", req.params.data, (result) => {
    console.log(result);
    res.redirect("/");
  });
});


router.put("/burgers/create/:id", (req, res) => {

  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne("devoured", req.body.devoured, condition, (result) =>{
    if (result.changedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
