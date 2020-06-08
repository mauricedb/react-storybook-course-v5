import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import MovieListItem from './MovieListItem';

class MoviesList extends Component {
  render() {
    const { movies, loading, error } = this.props;

    if (loading) {
      return <LinearProgress />;
    }
    if (error) {
      return <Typography color="error">{error.message}</Typography>;
    }
    return (
      <GridList>
        {movies.map(movie => <MovieListItem key={movie.id} {...movie} />)}
      </GridList>
    );
  }
}

export default MoviesList;
