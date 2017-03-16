import React from 'react';
import {
  Text,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppWithNavigationState from './navigations/appWithNavigationState';
import appReducers from './reducers';

const store = createStore(appReducers);

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