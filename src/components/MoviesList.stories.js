import React from 'react';

import { storiesOf } from '@storybook/react';

import MoviesList from './MoviesList';

const movies = [
  {
    id: 238,
    title: 'The Godfather',
    vote_average: 8.6,
    popularity: 26.898,
    backdrop_path: '/ejdD20cdHNFAYAN2DlqPToXKyzx.jpg',
    overview:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    release_date: '1972-03-14',
  },
  {
    id: 680,
    title: 'Pulp Fiction',
    vote_average: 8.4,
    backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    release_date: '1994-09-10',
  },
  {
    id: 240,
    title: 'The Godfather: Part II',
    vote_average: 8.5,
    backdrop_path: '/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg',
    overview:
      'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
    release_date: '1974-12-20',
  },
  {
    id: 311,
    title: 'Once Upon a Time in America',
    vote_average: 8.4,
    popularity: 13.334,
    backdrop_path: '/gUdk0FMw38DSUqpnLLHCAWN60he.jpg',
    overview:
      'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
    release_date: '1984-05-23',
  },
  {
    id: 550,
    title: 'Fight Club',
    vote_average: 8.4,
    backdrop_path: '/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    release_date: '1999-10-15',
  },
];

storiesOf('MoviesList', module)
  .add('default', () => <MoviesList movies={[]} />)
  .add('With movies', () => <MoviesList movies={movies} />)
  .add('When loading', () => <MoviesList loading />)
  .add('With error', () => (
    <MoviesList error={{ message: 'Some error message' }} />
  ));
