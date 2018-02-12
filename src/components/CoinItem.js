import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import colors from './../config/colors';

class CoinItem extends Component{

  static propTypes = {
    coin: PropTypes.object,
    title: PropTypes.string
  };

  render() {
    const { titleStyle , viewStyle} = styles;

    return(
      <View style={viewStyle}>
        <Text style={titleStyle}>
          {this.props.coin}
        </Text>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    color: colors.textHeader,
    fontSize: 24,
    paddingLeft: 15
  },
  viewStyle: {
    height: 64
  }
};

export default CoinItem;