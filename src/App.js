import React, { useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    s: "", // Search query
    results: [], // Result array
    selected: {}, // Clicked on
  });

  const apiurl = "http://www.omdbapi.com/?apikey=9c632899";

  const search = (e) => {
    if (e.key === "Enter") {
      // Check for enter key being pressed
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        // Destructure the data
        let results = data.Search;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    // Handle value when typing
    let s = e.target.value;

    setState((prevState) => {
      // Get previous state and change search query to the s above
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      // Get the selected movie data
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
