var express = require("express");
const { getAllBurgers } = require("../models/burger.js");
var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", (req,res) => {
    burger.getAllBurgers("burgers", (err, data) => {
        res.render("index", {burger: data} )
    })

})

router.post("/api/burgers", (req,res) => {
    burger.getABurger(["burger_name", "devoured"],[
        req.body.name, req.body.devoured],  (err,data) => {
        res.json({id: data});
    })
})




module.exports = router;