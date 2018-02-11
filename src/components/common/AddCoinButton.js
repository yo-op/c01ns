import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const AddCoinButton = ({ onPress }) => {
  const { buttonStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

AddCoinButton.prototypes = {
  onPress: PropTypes.func
};

export { AddCoinButton };