exports.getAllPokemon = (req, res) => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        });
};

exports.getPokemonById = (req, res) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        });
};

exports.getPokemonByName = (req, res) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${req.params.name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        });
};

// exports.getRandomPokemon = (req, res) => {
//     let random =1;
//     const url = `https://pokeapi.co/api/v2/pokemon/` + random;
//     console.log(url);
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             res.json(data);
//         })
//         .catch(error => {
//             res.json(error);
//         });
// };

module.exports = exports;