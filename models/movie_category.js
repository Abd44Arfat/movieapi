const mongoose = require("mongoose");
// 1-create schema
const categoryschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " required"],
    unique: [true, " category must be uniqued"],
    minlength: [3, "too short category name"],
    Maxlength: [32, "too long category name"],
  },
  slug: {
    type: String,
    lowercase: true,
  },
image:{
type:String,

},

},{timestamps:true});



// create
// categoryschema.post('save', (doc) => {
//   setImageURL(doc);
// });






// create model
const category = mongoose.model(`category`, categoryschema);
module.exports = category;
