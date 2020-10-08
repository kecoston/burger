var express = require("express");
const { getAllBurgers } = require("../models/burger.js");
var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", (req,res) => {
    burger.getAllBurgers("burgers", (err, data) => {
        res.render("index", {burger: data} )
    })

})





module.exports = router;