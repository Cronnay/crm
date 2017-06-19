var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Customer = require("../models/customer");
var middleware = require("../middleware");

var newCustomer = {namn:"Alfred AB", orgid:5566778899, adress:"Timjanvägen 10", postnr: "96164", postort: "Boden", telefonnummer: "0722003579", fornamn:"Sebbe", efternamn:"Berglönn", status:"Inte uppringd"};

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
      passport.authenticate("local")(req,res, function(){
        res.render("secret")
      });
    }
  });
});

router.get("/login", function(req,res){
  res.render("auth/login");
});

router.post("/login", passport.authenticate("local",{
  successRedirect: "/secret",
  failureRedirect: "/login"
}), function(req,res){});
router.get("/logout", function(req,res){
  req.logout();
  res.redirect("/");
});



module.exports = router; //Emitter
