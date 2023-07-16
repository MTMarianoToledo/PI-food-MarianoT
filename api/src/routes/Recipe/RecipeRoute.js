const axios = require('axios');
const { Router } = require("express");
const RecipeRoute = Router();

    RecipeRoute.get('/', async(req, res)=>{
        const { name } = req.query;
        try {
            const recipe= await getDietName(name);
            res.status(200).send({recipe: recipe})
        } catch (error) {
            res.status(404).send({error: error.message});
        }
    })

    RecipeRoute

module.exports = {RecipeRoute};