import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import "./MovieListItem.css";

function MovieListItem({ id, title, backdrop_path, overview, onLearnMore }) {
  return (
    <Card className="movie-list-item">
      {backdrop_path && (
        <CardMedia
          className="movie-list-item-image"
          image={`//image.tmdb.org/t/p/w300${backdrop_path}`}
          title={title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography component="p">{overview}</Typography>
      </CardContent>
      <CardActions>
        <Link component={RouterLink} to={`/movie/${id}/${title}`}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}

export default MovieListItem;
