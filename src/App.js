import React from "react";

import Header from "./components/Header";
import MoviesLoader from "./components/MoviesLoader";
import MovieDetailsLoader from "./components/MovieDetailsLoader";

function App() {
  return (
    <div>
      <Header />
      {/* <MoviesLoader /> */}
      <MovieDetailsLoader />
    </div>
  );
}

export default App;
