import React, { PropTypes } from 'react';
import { Component, Button } from 'react-native';

const MovieCard = ({movie, navigateToMovieDetail}) => {
  return(
    <Button onPress={() => navigateToMovieDetail(movie.id)} title={movie.name} />
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  navigateToMovieDetail: PropTypes.func.isRequired
}

export default MovieCard;