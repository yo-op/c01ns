import React, { Component } from 'react';
import { Image } from 'react-native';
import NavBarStyled from './NavBarStyled';
import TextButton from '../TextButton';
import IconButton from '../IconButton';

const settingsIcon = require('../../Assets/settings-icon.png');
const logoIcon = require('../../Assets/logo.png');

class NavBar extends Component {
  render() {
    return (
      <NavBarStyled {...this} >
        <IconButton>
          <Image source={ settingsIcon } />
        </IconButton>
        <Image source={ logoIcon }/>
        <TextButton>Edit</TextButton>
      </NavBarStyled>
    );
  }
}
export default NavBar;
