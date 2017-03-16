import React from 'react';
import { Component } from 'react-native';

const MovieCard = ({movie}) => {
  return(
    <Text>{movie.name}</Text>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieCard;