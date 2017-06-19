var Customer = require("../models/customer");
var User = require("../models/user");

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){ //middleware
    if(req.isAuthenticated()){
      return next();
    }
    else{
      res.redirect("/login");
    }
}

module.exports = middlewareObj;