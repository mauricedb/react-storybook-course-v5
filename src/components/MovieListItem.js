import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./MovieListItem.css";

function MovieListItem({ title, backdrop_path, overview, onLearnMore }) {
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
        <Button size="small" color="primary" onClick={onLearnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieListItem;
