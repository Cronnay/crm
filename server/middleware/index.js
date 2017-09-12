var Customer = require("../models/customer");
var User = require("../models/user");
var Notes = require("../models/notes");
var List = require("../models/list");
var Affar = require("../models/affar");

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){ //middleware
    if(req.isAuthenticated()){
      return next();
    }
    else{
      res.redirect("/login");
    }
}

// middlewareObj.checkOwnership = function(req, res, next){
//   var count = 0;
//   if(req.isAuthenticated()){
//     User.findById(req.user._id, (err, usr) => {
//       usr.customer.forEach((customerId) => {
//         if(customerId.equals(req.params.id)){
//           next();
//         }
//         count++;
//         if(count === usr.customer.length){
//           res.redirect("back");
//         }
//       });
//     });
//   }
// }

module.exports = middlewareObj;