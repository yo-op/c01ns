import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { CardSection } from './common/CardSection';
import colors from './../config/colors';
import SparkLines from './SparkLines';

class CoinItem extends Component{

  static propTypes = {
    coin: PropTypes.object,
    coinName: PropTypes.string
  };

  render() {
    const { titleStyle , rowStyle} = styles;
    return(
      <CardSection style={rowStyle}>
        <SparkLines />
        <Text style={titleStyle}>
          {this.props.coin.Name}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    color: colors.textHeader,
    fontSize: 24,
    paddingLeft: 15
  },
  rowStyle: {
    height: 64
  }
};

export default CoinItem;