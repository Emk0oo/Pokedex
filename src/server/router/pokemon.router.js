const express = require('express');
const router = express.Router();
const PokemonController = require('../controller/pokemon.controller');

router.get('/', PokemonController.getAllPokemon);
router.get('/id/:id', PokemonController.getPokemonById);
router.get('/name/:name', PokemonController.getPokemonByName);
router.get('/random', PokemonController.getRandomPokemon);

module.exports = router;
