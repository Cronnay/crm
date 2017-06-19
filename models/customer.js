var mongoose = require("mongoose");

var customerschema = new mongoose.Schema({
  namn: String,
  orgid: Number,
  adress: String,
  postnr: String,
  postort: String,
  telefonnummer: String,
  fornamn: String,
  efternamn: String,
  status: String

});
module.exports = mongoose.model("Customer", customerschema);
