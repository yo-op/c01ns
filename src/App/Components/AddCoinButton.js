import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const ButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  height: 64px;
  width: 64px;
  bottom: 16px;
  left: 50%;
  margin-left: -32px;
  border-radius: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(33,206,153,0.25);
`;
const addIcon = require('../Assets/add-icon.png');

const AddCoinButton = onPress => (
    <ButtonWrapper onPress={ onPress }>
      <Image source={ addIcon } />
    </ButtonWrapper>
);

AddCoinButton.propTypes = {
  onPress: PropTypes.func,
};

export { AddCoinButton, ButtonWrapper };
