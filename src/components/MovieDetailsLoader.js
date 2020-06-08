import React from "react";
import useAbortableFetch from "use-abortable-fetch";

import MovieDetails from "./MovieDetails";

function MovieDetailsLoader() {
  const url =
    "https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/238";
  const { data: movie, error, loading } = useAbortableFetch(url);

  return <MovieDetails movie={movie} error={error} loading={loading} />;
}

export default MovieDetailsLoader;
