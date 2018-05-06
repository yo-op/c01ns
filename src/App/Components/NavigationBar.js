import React, { Component } from 'react';
import { Image } from 'react-native';
import NavigationBarWrapper from './Styles/NavigationBarWrapper';
import TextButton from './TextButton';
import IconButton from './IconButton';

const settingsIcon = require('../Assets/settings-icon.png');
const logoIcon = require('../Assets/logo.png');

class NavigationBar extends Component {
  render() {
    return (
      <NavigationBarWrapper {...this} >
        <IconButton>
          <Image source={ settingsIcon } />
        </IconButton>
        <Image source={ logoIcon }/>
        <TextButton>Edit</TextButton>
      </NavigationBarWrapper>
    );
  }
}
export default NavigationBar;
