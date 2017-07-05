var mongoose = require("mongoose");

var customerschema = new mongoose.Schema({
  orgid: String,
  foretagsnamn: String,
  adress: String,
  postnr: String,
  postort: String,
  kontaktnamn: String,
  kontakttelefon: String,
  kontaktepost: String,
  kontakthemsida: {type: String, default : 'https://www.hemsida.se'},
  antalanstallda: {type: Number, default : 0},
  juridiskform: {type: String, default : "Bolagsform"},
  koncernmoderbolagsnamn: {type: String, default : "Ingen"},
  nettoomsattning: String,
  vd: String,
  status: {type: String, default : 'Ring upp'},
  skapad: {type: Date, default: Date.now},
  uppdaterad: {type: Date, default: Date.now},
  anteckningar: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note"
    }
  ],
  affar: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Affar"
    }
  ]
});
module.exports = mongoose.model("Customer", customerschema);
