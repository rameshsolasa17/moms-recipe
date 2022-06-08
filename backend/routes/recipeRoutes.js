import express from 'express'
const router = express.Router()

import {getRecipes,getRecipe,createRecipe} from '../controllers/recipeController.js'

router.route('/').get(getRecipes).post(createRecipe)

router.route('/:id').get(getRecipe)

export default router
