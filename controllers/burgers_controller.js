var express = require("express");
const { getAllBurgers } = require("../models/burger.js");
var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", (req,res) => {
    burger.getAllBurgers("burgers", (err, data) => {
        res.render("index", {burger: data} )
    })
})

router.post("/burgers/create", function(req, res) {
    burger.postABurger("burgers", "burger_name", req.params.data, function(result) {
      console.log(result);
      res.redirect("/");
    });
  });


router.post("api/burgers")

module.exports = router;
