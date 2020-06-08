import React from "react";

import GridList from "@material-ui/core/GridList";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

import MovieListItem from "./MovieListItem";

function MoviesList({ movies, loading, error }) {
  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return <Typography color="error">{error.message}</Typography>;
  }

  if (!movies) {
    return null;
  }

  return (
    <GridList>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} {...movie} />
      ))}
    </GridList>
  );
}

export default MoviesList;
