import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions'

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log(props)
  //   this.actions = props.actions;
  // }

  onLogin() {
    console.log(this.props.actions.login('alwin'))
    //console.log(this.props.login('SALUT'))
  }

  render() {
    console.log('------------------------')
    console.log(this.props.state.user.isLoggedIn)
    console.log('------------------------')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, you can simply edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          onPress={this.onLogin.bind(this)}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>
           {this.props.state.user.isLoggedIn}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = state => ({state})
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch)})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
