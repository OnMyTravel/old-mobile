import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import App from './app/App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from './app/reducers';

const store = createStore(reducers)

export default class mobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <App />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('mobile', () => mobile);
