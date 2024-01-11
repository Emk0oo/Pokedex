const express = require('express');
const router = express.Router();
const PokemonController = require('../controller/pokemon.controller');

router.get('/', PokemonController.getAllPokemon);
router.get('/:id', PokemonController.getPokemonById);
router.get('/:name', PokemonController.getPokemonByName);

module.exports = router;