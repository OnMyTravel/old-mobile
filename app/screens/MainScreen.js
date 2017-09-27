import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

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
});

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Login Screen
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'NAVIGATION', route: 'Register' })}
      title="Log in"
    />
  </View>
);

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

MainScreen.navigationOptions = {
  title: 'Log In',
};

export default MainScreen;