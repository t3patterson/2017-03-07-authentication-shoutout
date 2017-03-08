const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  username:  { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  avatarUrl:     { type: String },
  createdAt:     { type: Date, default: Date.now }

})

module.exports = {
  User: mongoose.model('User', usersSchema)
}
