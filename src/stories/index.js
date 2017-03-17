import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MovieCard from '../components/MovieCard.component';

const movieItem = {
    id: '58cb49a4a603bbd1eb6e7771',
    name: 'Kong Skull Island',
    year: 1980
};

storiesOf('MovieCard', module)
  .add('basic', () => (
    <MovieCard movie={movieItem} />
  ));