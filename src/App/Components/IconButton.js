import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const IconButton = ({ onPress, children }) => (
    <TouchableOpacity onPress={onPress}>
      {children}
    </TouchableOpacity>
);

IconButton.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.object
};

export default IconButton;
