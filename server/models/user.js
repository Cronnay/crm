var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  customer: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Customer"
      }
  ],
  list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List"
    }
  ],
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  },
  authority: {type: String, default: "Superuser"}
});

var options = {
  errorMessages: {
    IncorrectPasswordError: "Password is incorrect",
    IncorrectUsernameError: "Username is incorrect"
  }
};


userSchema.plugin(passportLocalMongoose, options);
module.exports = mongoose.model("User", userSchema);
