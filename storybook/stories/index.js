import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';
import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import MovieCard from '../../src/components/MovieCard.component';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

const movieItem = {
    id: '58cb49a4a603bbd1eb6e7771',
    name: 'Kong Skull Island',
    year: 1980
};
const emptyFunc = (movieId) => { };

storiesOf('MovieCard', module)
  .addDecorator(getStory => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('basic', () => (
    <MovieCard movie={movieItem} navigateToMovieDetail={emptyFunc} />
  ));
