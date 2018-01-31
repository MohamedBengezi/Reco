var express = require("express");
var router = express.Router();

router.get("/",function (req,res) {
    //Do the facebook login checkup here
    res.send("success");
    res.send("failure");
});