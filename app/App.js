import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import AppWithNavigationState from './navigators/AppNavigator';

import reducers from './reducers';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}