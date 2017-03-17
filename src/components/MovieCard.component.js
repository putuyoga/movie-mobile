import React, { PropTypes } from 'react';
import {
  Component,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
  yearText: {
    color: 'grey'
  }
});

const MovieCard = ({movie, navigateToMovieDetail}) => {
  return(
    <TouchableHighlight onPress={() => navigateToMovieDetail(movie.id)}>
      <View style={styles.row}>
        <Text style={styles.text}>{movie.name}</Text>
        <Text style={styles.yearText}>{movie.year}</Text>
      </View>
    </TouchableHighlight>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  navigateToMovieDetail: PropTypes.func.isRequired
}

export default MovieCard;