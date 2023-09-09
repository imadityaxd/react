import React from "react";

function Pokemon({ pokemon }) {
  //getting array of pokemon names as a prop
  return (
    <div className="pokemon-list">
      <h2 className="heading">Pokemon's List</h2>
      <ul>
        {pokemon.map(
          (
            name,
            index //using map() method on array of pokemons to print it in UI.
          ) => (
            <li key={index}>{name}</li> //passing a key a unique value that is index, and displaying pokemons names on UI.
          )
        )}
      </ul>
    </div>
  );
}

export default Pokemon;
