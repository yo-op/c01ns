import React, { Component } from 'react';
import { Image } from 'react-native';
import { Constants } from 'expo';
import styled from 'styled-components/native';
import TextButton from '../TextButton';
import IconButton from '../IconButton';

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
        <IconButton>
          <Image source={require('../../Assets/settings-icon.png')} />
        </IconButton>
        <Image source={require('../../Assets/logo.png')} />
        <TextButton>Edit</TextButton>
      </NavBarWrapper>
    );
  }
}

export { NavBar };
