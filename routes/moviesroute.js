const express = require("express");
// const {
//   createProductValidator,
//   deleteProductValidator,
//   getProductValidator,
//   updateProductValidator,
// } = require("../utils/validator/product_validator");
const {
   createMovie,
   getMovies,
   DeleteMovie,
   updateMovie

} = require("../services/movie-services");

const router = express.Router();
router.route("/").get(getMovies).post(createMovie);


router
  .route("/:id")
  // .get(getProductValidator, getproduct)
  .put(updateMovie)
  .delete(DeleteMovie);

module.exports = router;
