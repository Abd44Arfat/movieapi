const mongoose = require("mongoose");
// 1-create schema
const movieschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "too short movie name"],
      Maxlength: [100, "too long movie name"],
    },
    slug: {
      type: String,
      lowercase: true,
      required: true,
    },

    description: {
      type: String,
      required: [true, "movie description is required"],
      trim: true,
      minlength: [20, "too short movie description"],
    },
    quantity: {
      type: Number,
      required: [true, "movie Quantity is required "],
    },
    sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "movie price is required "],
      trim: true,
      Max: [200000, "too long movie price"],
    },
    priceAfterDiscount: {
      type: Number,
    },

    colors: [String],

    imageCover: {
      type: String,
      required: [true, "movie image is required "],
    },
    image: [String],
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "category",
      required: [true, "subcategory must be belong to Parent category"],
    },



  
    ratingsAverage: {
      type: Number,
      min: [1, "rating must be above or equal 1"],
      Max: [5, "rating must be below or equal 5"],
    },
    ratingQuantity: {
      type: Number,

      default: 0,
    },
  },
  { timestamps: true }
);

//mongoose query middleware
movieschema.pre(/^find/, function (next) {
  this.populate({
    path: 'category',
    select: 'name -_id',
  });
  next();
});
// create model


const Movies= mongoose.model(`Movies`, movieschema);

module.exports=Movies