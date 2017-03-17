import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  ListView,
  View,
  Button
} from 'react-native';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/movie';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Movies',
  };
  
  constructor() {
    super();
  }

  _navigateToMovieDetail = (movieId) => {
    const { navigation, viewMovieDetail } = this.props;
    navigation.navigate('MovieDetail');
    viewMovieDetail(movieId);
  }

  _renderRow = (rowData) => {
      return (
        <Button onPress={() => this._navigateToMovieDetail(rowData.id)} title={rowData.name} />
      );
  }

  render() {

    const { movieDataSource } = this.props;
    const { isLoading } = this.props.movie;
    return (
      <View>
        <ListView dataSource={movieDataSource} renderRow={this._renderRow} enableEmptySections={true}/>
        {isLoading ? <Text>i am loading...</Text> : null }
      </View>
    );
  }
}

const mapStateToProps = (store) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return {
    // component props : store property
    movie: store.movie,
    movieDataSource: ds.cloneWithRows(store.movie.data)
  }
}

const mapDispatchToProps = (dispatch) => {
  return { viewMovieDetail: bindActionCreators(actions.viewMovieDetail, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);