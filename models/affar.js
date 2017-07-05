var mongoose = require("mongoose");

var affarSchema = new mongoose.Schema({
    summa: String,
    status: {type: String, default: "Inväntar Svar"},
    anteckning: String,
    bifogad: String,
    order: {type: Date, default: Date.now},
    agare: String
});
module.exports = mongoose.model("Affar", affarSchema);
