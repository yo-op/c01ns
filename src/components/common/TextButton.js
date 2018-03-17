import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const TextWrapper = styled.Text`
  color: #21CE99;
  font-size: 16px;
  line-height: 19px;
`;

const TextButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextWrapper>
        {children}
      </TextWrapper>
    </TouchableOpacity>
  );
};

export default TextButton;
