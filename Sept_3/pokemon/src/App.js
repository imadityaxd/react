import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]); //initializing pokemon as an empty array with useState.
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  ); //setting current page URL at initial stage.
  const [nextPageUrl, setNextPageUrl] = useState(); //initializing variable to store the url of next page.
  const [previousPageUrl, setPreviousPageUrl] = useState(); //initializing variable to store the url of previous page.
  const [loading, setLoading] = useState(); //initializing loading variable, later we will give boolean value to it to show loading screen when the api will take time to fetch data.
  const [error, setError] = useState(null); //variable to store error message

  // Inside the fetchData function, an asynchronous HTTP request is made to the API to fetch a list of Pokemon names.
  async function fetchData() {
    //using asynchronous function to make api call
    try {
      setLoading(true);
      //axios library is used for making HTTP request here.
      const response = await axios.get(currentPageUrl);
      setLoading(false);
      setPokemon(response.data.results.map((p) => p.name)); //extracting the names of Pokemon from the api data and updating it in pokemon variable.
      setNextPageUrl(response.data.next); //setting the url of next page from api to nextPageUrl variable
      setPreviousPageUrl(response.data.previous); //setting the url of previous page from api to previousPageUrl variable
    } catch (err) {
      // if any error occured in try(fetching api), it will be handled here.
      setLoading(false); //giving the false value to loading variable if error occured.
      setError("Error occured in fetching data:", err); //storing error messege in error variable
      console.log(error);
    }
  }

  //Here's, the useEffect hook will get called automatically everytime when the currentPageUrl will update.
  useEffect(() => {
    fetchData(); //calling fetchData function inside useEffect hook
  }, [currentPageUrl]); //([] - means no dependencies, so it will run once)

  function gotoNextPage() {
    //functions to go to next page.
    setCurrentPageUrl(nextPageUrl); //url of next page will set to current page
  }
  function gotoPreviousPage() {
    //functions to go to previous page.
    setCurrentPageUrl(previousPageUrl); //url of previous page will set to current page.
  }

  return (
    <>
      {loading ? ( //when the loading value is true it will show <h1>Loading..</h1> in UI and if it's false it will check for error, if any error occured error messege will be shown else the pokemon component will rendered in UI.
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <PokemonList pokemon={pokemon} />{" "}
          {/*passing pokemon variable as a prop*/}
          <Pagination
            gotoNextPage={gotoNextPage}
            hasNextPage={!nextPageUrl}
            gotoPreviousPage={gotoPreviousPage}
            hasPreviousPage={!previousPageUrl}
          />{" "}
          {/*passing gotoNextPage function and gotoPreviousPage function as a prop in Pagination Component also giving hasNextPage and hasPreviousPage prop a boolean value to disable and enable next/previous buttons */}
        </>
      )}
    </>
  );
}

export default App;
