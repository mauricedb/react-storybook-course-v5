import React from "react";
import { action } from "@storybook/addon-actions";

import MovieListItem from "./MovieListItem";

export default {
  title: "MovieListItem",
  component: MovieListItem,
};

const movie = {
  id: 238,
  title: "The Godfather",
  backdrop_path: "/ejdD20cdHNFAYAN2DlqPToXKyzx.jpg",
  overview:
    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  vote_average: 8.7,
};

export const Default = () => {
  return <MovieListItem {...movie} onLearnMore={action("Learn more")} />;
};

export const NoImage = () => {
  return (
    <MovieListItem
      {...movie}
      backdrop_path=""
      onLearnMore={action("Learn more")}
    />
  );
};
