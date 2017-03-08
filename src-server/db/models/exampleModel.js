const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ----------------------
// DATA TABLE
// ----------------------
const shoutSchema = new Schema({
  // example of optional fields
  msg:        { type: String, required: true },
  from:       { type: String },
  imgLink:    { type: String },
  rating:     { type: String },

  likes:      [{type: Schema.Types.ObjectId, ref: 'User'}],
  _userId:    { type: Schema.Types.ObjectId, ref: 'User'}

})


module.exports = mongoose.model('Item', shoutSchema)
