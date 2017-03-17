import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';

class MovieDetailScreen extends React.Component {

  static navigationOptions = {
    title: 'Detail',
  };

  constructor() {
    super();
  }
  
  styles = StyleSheet.create({
    container: {
      padding: 10
    },
    title: {
      fontSize: 24,
    },
    year: {
      padding: 2,
      fontSize: 16,
      color: 'gray'
    },
    image: {
      height: 300
    },
    imageContainer: {
      backgroundColor: 'gray'
    },
    rating: {
      padding: 2,
      fontSize: 12,
      color: 'green' 
    }
  });

  getImageUrl(movieId) {
    const url = 'http://192.168.0.113:3000/movies/' + movieId + '/image';
    console.log(url);
    return url;
  }

  render() {
    const { isLoading, movie } = this.props;
    return (
      <View style={this.styles.container}>
        { isLoading ? <Text>Please wait, while we're loading detail</Text> : 
        <View>
          <View style={this.styles.imageContainer}>
            <Image style={this.styles.image} source={[{uri: this.getImageUrl(movie.id)}]} />
          </View>
          <Text style={this.styles.title}>{movie.name}</Text>
          <Text style={this.styles.year}>{movie.year}</Text>
          <Text style={this.styles.rating}>{movie.movieDetail.rating}/5</Text>
          <Text>director: {movie.movieDetail.directorName}</Text>
        </View>
        }
      </View>
    );
  }
}


const mapStateToProps = (store) => {
  return {
    // component props : store property
    movie: store.movie.currentDetail,
    isLoading: store.movie.isDetailLoading
  }
}
export default connect(mapStateToProps)(MovieDetailScreen)