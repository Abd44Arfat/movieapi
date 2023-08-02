const slugify = require("slugify");

const Movie = require("../models/movies_model");
const asyncHandler = require("express-async-handler");
const ApiFeatures = require("../utils/Api_features");
const ApiError = require("../utils/ApiError");
const Factory = require("./HandlerFactory");

exports.getMovies = Factory.getAll(Movie);
// @desc    Update specific Movie
// @route   PUT /api/v1/Movies/:id
// @access  Private
exports.getMovie = Factory.getOne(Movie);
exports.createMovie = Factory.createOne(Movie);
// @desc    Update specific Movie
// @route   PUT /api/v1/Movies/:id
// @access  Private
exports.updateMovie = Factory.updateOne(Movie);

/**
 * @desc Delete category
 * @route /api/v1/categories/:id
 * @method Delete
 * @access private
 */

exports.DeleteMovie = Factory.deleteOne(Movie);
