import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  ListView,
  View,
  Button
} from 'react-native';
import MovieCard from '../components/MovieCard.component';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/movie';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Movies',
  };
  
  constructor() {
    super();
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  _navigateToMovieDetail = (movieId) => {
    const { navigation, viewMovieDetail } = this.props;
    navigation.navigate('MovieDetail');
    viewMovieDetail(movieId);
  }

  _renderRow = (rowData) => {
      return (
        <MovieCard navigateToMovieDetail={this._navigateToMovieDetail} movie={rowData} />
      );
  }

  render() {
    
    const { movie } = this.props;
    const { isLoading } = this.props.movie;
    const movieDataSource = this.dataSource.cloneWithRows(movie.data);

    return (
      <View>
        <ListView dataSource={movieDataSource} renderRow={this._renderRow} enableEmptySections={true}/>
        {isLoading ? <Text>i am loading...</Text> : null }
      </View>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    // component props : store property
    movie: store.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return { viewMovieDetail: bindActionCreators(actions.viewMovieDetail, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);