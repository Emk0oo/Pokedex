import React from "react";
import logo from "./assets/pokeballSearch.png";

const App = () => {
  console.log("App.jsx");
  function searchPokemonByID() {
    console.log("searchPokemon");
    let id = document.getElementById("idPkmn").value;
    console.log(id);
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => response.json())
      .then((data) => console.log(data.sprites.front_default));
  }
  return (
    <div className="px-20 py-10 space-y-4 ">
      <h1 className="text-4xl text-center space-y-4">Pokedex</h1>
      <div className="flex ">
        <input
          className="w-full  rounded-2xl bg-slate-100 p-2"
          placeholder="Search for a pokemon"
          id="idPkmn"
        ></input>
        <a href="#" onClick={searchPokemonByID}>
          <img src={logo} className="w-15 h-10 pl-2" draggable="false"></img>
        </a>
      </div>
      <div className="gap-6 grid sm:grid-cols-2">
        <a
          href="/pokemon"
          className="border bg-green-500 text-white text-left sm:text-center overflow-hidden shadow-md rounded-xl p-6 hover:bg-green-400"
        >
          Pokemon
        </a>
        <a
          href="/abilities"
          className="border bg-red-500 text-white text-left sm:text-center overflow-hidden shadow-md rounded-xl p-6 hover:bg-red-400"
        >
          Abilities
        </a>
        <a
          href="/items"
          className="border bg-blue-500 text-white text-left sm:text-center overflow-hidden shadow-md rounded-xl p-6 hover:bg-blue-400"
        >
          Items
        </a>
        <a
          href="/moves"
          className="border bg-yellow-500 text-white text-left sm:text-center overflow-hidden shadow-md rounded-xl p-6 hover:bg-yellow-400"
        >
          Moves
        </a>
      </div>

      <div className="flex  flex-wrap overflow-hidden">
        <div className="border bg-purple-500 text-white shadow-md rounded-xl p-6 w-full">
          <h2 className="text-left font-bold">Title : Random</h2>

          <div className="flex flex-wrap w-full justify-between">
            <a
              href="/name"
              className="hover:bg-purple-400 text-left text-4xl font-bold"
            >
              Bulbasaur
            </a>
            <div className="text-2xl font-bold pt-2  ">#018</div>
          </div>

          <ul className="flex flex-wrap mt-3 space-x-4">
            <li className="border rounded-xl px-4 py-1 text-sm bg-purple-400">
              Type1
            </li>
            <li className="border rounded-xl px-4 py-1 text-sm bg-purple-400">
              Type2
            </li>
          </ul>

          <div className="flex flex-row mt-8 items-center md:mt-0 flex-wrap justify-around relative">
            <p className="max-w-lg text-lg sm:text-2xl ml-4">
              Description blabla
            </p>
            <img
              className=" relative w-auto h-64 sm:h-80 "
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
