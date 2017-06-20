var mongoose = require("mongoose");

var listschema = new mongoose.Schema({
    name: String,
    customers: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Customer"
      }
  ]
});
module.exports = mongoose.model("List", listschema);
