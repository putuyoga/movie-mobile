import React from 'react';
import {
  Text,
  ListView,
  Button
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Movies',
  };
  
  constructor() {
    super();
    const movies = [
      {
        name: 'lol'
      },
      {
        name: 'lel'
      },
      {
        name: 'test'
      }
    ]
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(movies),
    };
  }

  renderRow = (rowData) => {
    return (
      <Button onPress={() => navigate('MovieDetail')} title={rowData.name} />
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <ListView dataSource={this.state.dataSource} renderRow={renderRow} />
    );
  }
}

export default HomeScreen;