import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const TextWrapper = styled.Text`
  color: #21CE99;
  font-size: 16px;
  line-height: 19px;
`;

const TextButton = ({ onPress, children }) => (
    <TouchableOpacity onPress={onPress}>
      <TextWrapper>
        {children}
      </TextWrapper>
    </TouchableOpacity>
);

TextButton.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string,
};

export default TextButton;
