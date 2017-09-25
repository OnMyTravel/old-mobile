import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginStatusMessage from '../components/LoginStatusMessage';
import AuthButton from '../components/AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F4',
    padding: 30
  },
  card: {
    backgroundColor: '#FFFFFF',
    height: '100%'
  }
});

const MainScreen = () => (
  <View style={styles.container}>
    <View style={styles.card}>
      <LoginStatusMessage />
      <AuthButton />
    </View>
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;