import { combineReducers } from 'redux';
import navReducer from './navReducer';
import movieReducer from './movieReducer';

const appReducer = combineReducers({
  nav: navReducer,
  movie: movieReducer
});

export default appReducer;