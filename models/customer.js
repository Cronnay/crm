var mongoose = require("mongoose");

var customerschema = new mongoose.Schema({
  orgid: String,
  foretagsnamn: String,
  adress: String,
  postnr: String,
  postort: String,
  kontaktfornamn: String,
  kontaktefternamn: String,
  kontakttelefon: String,
  kontaktepost: String,
  kontakthemsida: {type: String, default : 'https://www.hemsida.se'},
  antalanstallda: {type: Number, default : 0},
  juridiskform: {type: String, default : "Bolagsform"},
  koncernmoderbolagsnamn: {type: String, default : "Ingen"},
  nettoomsattning: String,
  vd: String,
  status: {type: String, default : 'Ring upp'}
});
module.exports = mongoose.model("Customer", customerschema);
