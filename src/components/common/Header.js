import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Header extends Component {

  static propTypes = {
    props: PropTypes.array,
    headerText: PropTypes.string
  };

  render(){
    const { textStyle, viewStyle } = styles;
    return(
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  }
};

export { Header };