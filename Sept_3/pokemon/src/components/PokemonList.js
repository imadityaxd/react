import React from "react";

const PokemonList = ({ pokemon }) => {
  console.log(pokemon); //receiving array of pokemon names with the help of props.
  return (
    <div>
      <div>
        {pokemon.map((p) => {
          //using map() method to extract the pokemon names from the array
          return <div key={p}>{p}</div>;
        })}
      </div>
    </div>
  );
};

export default PokemonList;
