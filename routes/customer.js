var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Customer = require("../models/customer");
var middleware = require("../middleware");
var util = require("util");
var fs = require("fs"); 
var multer = require("multer");
var upload = multer({ dest: 'uploads/'});
var xlsx = require('xlsx');



router.get("/secret", middleware.isLoggedIn, function(req,res){
    User.findById(req.user._id).populate("customer").exec(function(err, user){
        if(user){
            res.render("secret", {data: user});
        }
        else{
            res.render("secret");
        }
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
router.put("/secret", middleware.isLoggedIn, function(req,res){
    Customer.findByIdAndUpdate(req.body.customerid, {status: req.body.status}, function(err, result){
        if(err) return (err);

        res.redirect("/secret");
    });
});
type = upload.single('excel');

router.post("/secret-files", middleware.isLoggedIn, type, function(req,res, next){
        var workbook = xlsx.readFile(req.file.path); // läser filer
        var first_sheet_name = workbook.SheetNames[0]; //första arketnamnet
        var worksheet = workbook.Sheets[first_sheet_name]; //välj arket med arknamnet
        var obj = xlsx.utils.sheet_to_json(worksheet);  //skriver ut det som en json-sträng.
        /*fs.unlink("./uploads" + req.file.path, function(err){ //Tar bort loggen som sparas
            if(err){
                console.log(err);
            }
        });*/
        obj.forEach(function(customer){
            var newCustomer = {
                "orgid" : customer.Organisationsnummer, 
                "foretagsnamn" : customer.Företagsnamn, 
                "adress" : customer.Besöksadress, 
                "postnr": customer.Postnummer,
                "postort" : customer.Postort,
                "kontaktnamn": customer.Kontaktnamn,
                "kontakttelefon": customer.Kontakt_Telefon,
                "kontaktepost" : customer.Kontakt_Epost,
                "kontakthemsida": customer.Kontakt_Hemsida,
                "antalanstallda" : customer.Antal_Anställda,
                "juridiskform": customer.Juridisk_form,
                "koncernmoderbolagsnamn" : customer.Koncermoderbolagsnamn,
                "nettoomsattning": customer.Nettoomsättning,
                "vd": customer.VD
            }
            User.findById(req.user._id, function(err, user){
                if(err){
                    console.log(err);
                }
                else{
                    Customer.create(newCustomer, function(error, newcustomer){
                        if(error){
                            console.log(error);
                        }
                        else{
                            user.customer.push(newcustomer);
                            user.save();
                            console.log(newcustomer);
                        }
                    })
                }
            });
        });
        res.render("test.ejs", {data : obj})
    
});


module.exports = router; //Emitter