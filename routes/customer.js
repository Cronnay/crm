var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Customer = require("../models/customer");
var middleware = require("../middleware");

var newCustomer = {namn:"Alfred AB", orgid:5566778899, adress:"Timjanvägen 10", postnr: "96164", postort: "Boden", telefonnummer: "0722003579", fornamn:"Sebbe", efternamn:"Berglönn", status:"Inte uppringd"};

router.get("/secret", middleware.isLoggedIn, function(req,res){
    User.findById(req.user._id).populate("customer").exec(function(err, user){
        res.render("secret", {data: user});
    });
    
});

router.post("/secret", middleware.isLoggedIn, function(req,res){
    User.findById(req.user._id, function(err, user){
        if(err){
            console.log(err);
        }
        else{
            Customer.create(req.body.customer, function(error, newcustomer){
                if(error){
                    console.log(error);
                }
                else{
                    user.customer.push(newcustomer);
                    user.save();
                    console.log(newcustomer);
                    res.redirect("/secret");
                }
            })
        }
    });
});


module.exports = router; //Emitter