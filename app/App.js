import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import AppWithNavigationState from './navigators/AppNavigator';

import reducers from './reducers';


// const store = createStore(reducers);
const store = createStore(reducers, undefined, autoRehydrate());
persistStore(store, { storage: AsyncStorage });

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}