import mongoose from 'mongoose'

const ingredientsSchema = mongoose.Schema({
    ingredient_name : {
        type: String,
        required: true
    },
    ingredient_quantity : {
        type: Number,
        default: 1
    }
})

const recipeSchema = mongoose.Schema({

    recipe_name : {
        type: String,
        required: true
    },
    recipe_images : {
        type: [String],
        required: true
    },
    recipe_type : {
        type: String,
        required: true
    },
    ingredients : [ingredientsSchema],
    procedure : {
        type: [String],
        required: true
    },
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe
