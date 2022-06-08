import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

import connectDB from './config/db.js'
import recipeRoutes from './routes/recipeRoutes.js'
import recipes from './data/recipes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'))
}

// app.get('/', (req, res) => {
//     res.send('API is running')
// })


app.use('/api/v1/recipes', recipeRoutes)

// app.get('/api/v1/recipes', (req, res) => {
//     res.json(recipes)
// })

// app.get('/api/v1/recipes/:id', (req, res) => {
//     const recipe = recipes.find( e => e.id==req.params.id )
//     res.json(recipe)
// })

const PORT = process.env.PORT || 8000 
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})

