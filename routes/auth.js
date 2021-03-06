var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user");
var Customer = require("../models/customer");
var middleware = require("../middleware");


router.get("/", function(req,res){
  res.render("landing");
});
router.get("/register", function(req,res){
  res.render("auth/landing");
});

router.post("/register", function(req,res){
  User.register(new User({username: req.body.username, name: "Testname"}),  req.body.password, function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/login");
    }
  });
});

router.get("/login", function(req,res){
  res.render("auth/login");
});

router.post("/login", passport.authenticate("local",{
  successRedirect: "/customer",
  failureRedirect: "/login"
}), function(req,res){});

router.get("/logout", function(req,res){
  req.logout();
  res.redirect("/");
});



module.exports = router; //Emitter
