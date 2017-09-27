import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  link: {
    color: '#06BEBD'
  }
});

const LinkButton = (props) => {
  return <TouchableHighlight onPress={() => props.goTo(props.target)}>
    <Text style={styles.link}>{props.text}</Text>
  </TouchableHighlight>
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => ({
  goTo: (route) => {
    dispatch({ type: 'NAVIGATION', route })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkButton);