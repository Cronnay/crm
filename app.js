var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
mongoose.connect("mongodb://localhost/crm");

var User = require("./models/user");
var Customer = require("./models/customer");

app.use(require("express-session")({
  secret: "Erikssonnord är ett företag i Boden med mycket cash",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res, next){
  res.locals.currentUser = req.user;
  next();
});


var auth = require("./routes/auth");
var customer = require("./routes/customer");
app.use(customer);
app.use(auth);

app.listen("3000", function(){
  console.log("Server is open!");
});
