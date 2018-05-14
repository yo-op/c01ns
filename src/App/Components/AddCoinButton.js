import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import ButtonWrapper from './Styles/ButtonWrapper';

const addIcon = require('../Assets/add-icon.png');

const AddCoinButton = onPress => (
    <ButtonWrapper onPress={ onPress }>
      <Image source={ addIcon } />
    </ButtonWrapper>
);

AddCoinButton.propTypes = {
  onPress: PropTypes.func
};

export default AddCoinButton;
