import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput, Button } from 'react-native';

import LoginStatusMessage from '../components/LoginStatusMessage';
import AuthButton from '../components/AuthButton';
import LinkButton from '../components/LinkButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  submit: {
    backgroundColor: '#06BEBD',
    borderRadius:40,
    padding: 20,
    marginTop: 20,
    marginRight:20,
    marginLeft:20,
  },
  submitText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 15
  },
  signinText: {
    color: '#919499',
  },
  input: {
    backgroundColor: '#F7F7F8',
    padding: 15,
    marginBottom: 10,
    marginRight:20,
    marginLeft:20,
  },
  alreadyRegistered: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const RegisterScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Créer un compte</Text>
    <Text style={styles.subtitle}>Commencez dès à présent à partager vos voyages avec vos proches.</Text>
    
    <TextInput
      style={styles.input}
      placeholder='Adresse électronique'
      keyboardType='email-address'>
    </TextInput>

    <TextInput style={styles.input} placeholder="Mot de passe"></TextInput>

    <TouchableHighlight style={styles.submit}>
      
      <Text style={styles.submitText}>Créer mon compte</Text>
    </TouchableHighlight>

    <View style={styles.alreadyRegistered}>
      <Text style={styles.alreadyRegisteredText}>J'ai déjà un compte. </Text>
      <LinkButton text="Me connecter" target="Back" />
    </View>
  </View>
);

RegisterScreen.navigationOptions = {
  title: 'Home Screen',
};

export default RegisterScreen;