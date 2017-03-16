import React from 'react';
import {
  Text
} from 'react-native';

class MovieDetailScreen extends React.Component {

  static navigationOptions = {
    title: 'Detail',
  };

  constructor() {
    super();
  }

  render() {
    return (
        <Text>This is Detail Page. Should be implement REDUX after this!</Text>
    );
  }
}

export default MovieDetailScreen;