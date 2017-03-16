import { combineReducers } from 'redux';
import navReducer from './navReducer';

const appReducer = combineReducers({
  nav: navReducer
});

export default appReducer;