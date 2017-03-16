import { StackNavigator } from 'react-navigation';
import HomeScreen from '../containers/HomeScreen';
import MovieDetailScreen from '../containers/MovieDetailScreen';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  MovieDetail: { screen: MovieDetailScreen }
});

export default AppNavigator;