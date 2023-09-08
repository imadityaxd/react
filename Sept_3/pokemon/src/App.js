import "./App.css";
import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]); //initializing pokemon as an empty array with useState.

  // Inside the fetchData function, an asynchronous HTTP request is made to the API to fetch a list of Pokemon names.

  async function fetchData() {
    try {
      //axios library is used for making HTTP request here.
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const pokemonNames = response.data.results.map((p) => p.name); //extracts the names of Pokemon from the response data

      setPokemon(pokemonNames); //Updating pokemon names
    } catch (error) {
      // Handling errors here
      console.error("Error fetching data:", error);
    }
  }

  // useEffect hook is used to call the fetchData function when the component first mounts.
  useEffect(() => {
    fetchData();
  }, []); //([] means no dependencies, so it will run once)

  return <PokemonList pokemon={pokemon} />; //passing pokemon names as a prop.
}

export default App;
