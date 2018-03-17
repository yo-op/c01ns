import React, { Component } from 'react';
import { Image } from 'react-native';
import { Constants } from 'expo';
import styled from 'styled-components/native';
import TextButton from '../TextButton';

const NavBarWrapper = styled.View`
  background-color: #15191E;
  margin-top: ${Constants.statusBarHeight};
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;

class NavBar extends Component {
  render(){
    return(
      <NavBarWrapper>
        <Image source={require('./logo.png')} />
        <TextButton>Edit</TextButton>
      </NavBarWrapper>
    );
  }
}

export { NavBar };
