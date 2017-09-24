import React, { Component } from 'react';
import {View } from 'react-native';

import RootComponent from './RootComponent';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers);
import AppWithNavigationState from './navigators/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}