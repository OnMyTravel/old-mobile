import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import FacebookLoginButton from '../components/FacebookLoginButton';
import LinkButton from '../components/LinkButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 100,
    padding: 20
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    color: '#3C4350'
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#696D6F',
    marginBottom: 50,
  },
  registerLink: {
    marginTop: 20,
  },
});

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>On My Travel</Text>
    <Text style={styles.subtitle}>Commencez dès à présent à partager vos voyages avec vos proches.</Text>
    <FacebookLoginButton></FacebookLoginButton>
    <View style={styles.registerLink}>
      <LinkButton text="Créer un compte" target="Register" />
    </View>
  </View>
);

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

MainScreen.navigationOptions = {
  title: 'Log In',
  headerTitleStyle: {
    /* this only styles the title/text (font, color etc.)  */
    color: 'red'
  },
};

export default MainScreen;