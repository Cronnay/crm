var mongoose = require("mongoose");

var affarSchema = new mongoose.Schema({
    agare: String,
    anteckning: String,
    Summa: String,
    order: {type: Date, default: Date.now},
    status: {type: String, default: "Offert skickad"},
    bifogad: String
});
module.exports = mongoose.model("Affar", affarSchema);
