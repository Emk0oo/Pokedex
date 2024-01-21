import React from "react";

const App = () => {
  console.log("App.jsx");
  // function searchPokemonByID() {
  //   console.log("searchPokemon");
  //   let id = document.getElementById("idPkmn").value;
  //   console.log(id);
  //   fetch("https://pokeapi.co/api/v2/pokemon/" + id)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data.sprites.front_default));
  // }
  return (
    <div className="p-6 space-y-4 ">
      <div>
        <h1 className="text-4xl text-center space-y-4">Pokedex</h1>
        <div className="gap-6 grid sm:grid-cols-2">
          <a href="/pokemon" className="border bg-green-500 text-white text-left sm:text-center overflow-hidden shadow-md rounded-xl p-6 hover:bg-green-400">Pokemon</a>
          <a href="/abilities" className="border bg-red-500 text-white text-left sm:text-center overflow-hidden shadow-md rounded-xl p-6 hover:bg-red-400">Abilities</a>
          <a href="/items" className="border bg-blue-500 text-white text-left sm:text-center overflow-hidden shadow-md rounded-xl p-6 hover:bg-blue-400">Items</a>
          <a href="/moves" className="border bg-yellow-500 text-white text-left sm:text-center overflow-hidden shadow-md rounded-xl p-6 hover:bg-yellow-400">Moves</a>
        </div>
        {/*  overflow-hidden shadow-md rounded-xl p-3  */}
      </div>
    </div>
  );
};

export default App;
