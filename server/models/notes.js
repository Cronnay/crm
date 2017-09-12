var mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
    skapare: String,
    text: String,
    tid: {type: Date, default: Date.now}
});
module.exports = mongoose.model("Note", noteSchema);
