var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", (req,res) => {
    burger.getBurgers((data) => {
        res.render("index", {burger: data} )
    });
});

router.post("/api/burgers", (req, res) => {
    burger.postABurger([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", (req, res) => {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.putBurger ({
      devoured: req.body.devoured
    }, condition, (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burger/:id", (req, res) => {
    var condition = "id = " + req.params.id;
  
    burger.deleteBurger(condition, (result) => {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
module.exports = router;