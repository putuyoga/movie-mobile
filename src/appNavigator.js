import { StackNavigator } from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import MovieDetailScreen from './pages/MovieDetailScreen';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  MovieDetail: { screen: MovieDetailScreen }
});

export default AppNavigator;