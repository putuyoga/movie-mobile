import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View
} from 'react-native';

class MovieDetailScreen extends React.Component {

  static navigationOptions = {
    title: 'Detail',
  };

  constructor() {
    super();
  }

  render() {
    const { isLoading, movieDetail } = this.props;
    return (
      <View>
        { isLoading ? <Text>Please wait, while we're loading detail</Text> : 
        <View>
          <Text>{movieDetail.name}</Text>
          <Text>{movieDetail.movieDetail.directorName}</Text>
        </View>
        }
      </View>
    );
  }
}


const mapStateToProps = (store) => {
  return {
    // component props : store property
    movieDetail: store.movie.currentDetail,
    isLoading: store.movie.isDetailLoading
  }
}
export default connect(mapStateToProps)(MovieDetailScreen)