const { Router } = require('express')
const {RecipeRoute }= require('../Recipe/RecipeRoute')
const {DietRoute}= require('../Diet/DietRoute')


const router = Router();

router.use('/recipes', RecipeRoute);
router.use('/diets', DietRoute);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
