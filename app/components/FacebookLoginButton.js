import React, { Component } from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 4,
    padding: 20,
    backgroundColor: '#3B5998',
  },
  text: {
    color: '#FFFFFF'
  }
});

export default class FacebookLoginButton extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.buttonWrapper}>
        <Text style={styles.text}>
          Se connecter avec Facebook
        </Text>
      </TouchableHighlight>
    )
  }
}
