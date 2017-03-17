import React from 'react';
import {
  Text,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppWithNavigationState from './navigations/appWithNavigationState';
import appReducers from './reducers';
import { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(appReducers, composeWithDevTools(applyMiddleware(thunk)));

import { loadMovies } from './actions/movie';
store.dispatch(loadMovies());

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Main;