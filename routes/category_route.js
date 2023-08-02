const express = require("express");

// const {
//   getCategoryValidator,
//   createCategoryValidator,
//   deleteCategoryValidator,
//   updateCategoryValidator,
// } = require("../utils/validator/categoryvalidator");
const {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  DeleteCategory

} = require("../services/category_services");


const router = express.Router();
router
  .route("/")
  .get(getCategories)
  .post(

  
  
    createCategory
  );

router
  .route("/:id")
  .get( getCategory)
  .put( 
 updateCategory)
  .delete( DeleteCategory);

module.exports = router;
