import asyncHandler from 'express-async-handler'
import Recipe from '../models/recipeModel.js'

// @desc    Fetch all recipes
// @route   GET /api/v1/recipes
// @access  Public
const getRecipes = asyncHandler(async (req, res) => {
    const recipes = await Recipe.find()

    res.json(recipes)
})

// @desc    Fetch Single recipe
// @route   GET /api/v1/recipes/:id
// @access  Public
const getRecipe = asyncHandler(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)

    if(recipe)
    {
        res.json(recipe)
    }
    else{
        res.status(404)
        throw new Error('Recipe Not Found')
    }
}) 

// @desc    Create a recipe
// @route   POST /api/v1/recipes
// @access  Private
const createRecipe = asyncHandler(async (req, res) => {
    const recipe = await Recipe.create(req.body)

    res.status(201).json(recipe)
})

export {getRecipes, getRecipe,createRecipe}

