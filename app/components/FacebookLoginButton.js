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
  
  logIn = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1801749093371838', {
        permissions: ['public_profile'],
      });

    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      
      const userDataRequest = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const userData = await userDataRequest.json();

      console.log(userData);
    }
  }

  render() {
    return (
      <TouchableHighlight style={styles.buttonWrapper} onPress={this.logIn}>
        <Text style={styles.text}>
          Se connecter avec Facebook
        </Text>
      </TouchableHighlight>
    )
  }
}
