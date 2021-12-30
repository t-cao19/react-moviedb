import React, { useState } from "react";
import Search from "./components/Search";

function App() {
  const [state, setState] = useState({
    s: "", // Search query
    results: [], // Result array
    selected: {}, // Clicked on
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=9c632899";

  const handleInput = (e) => {
    // Handle value when typing
    let s = e.target.value;

    setState((prevState) => {
      // Get previous state and change search query to the s above
      return { ...prevState, s: s };
    });

    console.log(state.s);
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App;
