import React, { Component, } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import colors from './../config/colors';

class CoinItem extends Component {

  static propTypes = {
    coinId: PropTypes.string,
    coinShortName: PropTypes.string,
    coinFullName: PropTypes.string,
    coinTotalCoinSupply: PropTypes.string
  };

  render() {
    console.log(this.props);

    const {viewStyle, titleStyle, subTitleStyle } = styles;

    return (
      <TouchableOpacity>
        <View style={viewStyle}>
          <Text style={titleStyle}>
            {this.props.coinShortName}
          </Text>
          <Text style={titleStyle}>
            {this.props.coinFullName}
          </Text>
          <Text style={subTitleStyle}>
            {this.props.coinTotalCoinSupply}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  viewStyle: {
    height: 100
  },
  titleStyle: {
    color: colors.textHeader,
    fontSize: 24,
    paddingLeft: 15
  },
  subTitleStyle:{
    color: colors.greenblue,
    fontSize: 18,
    paddingLeft: 15
  },
  rowStyle: {
    height: 80
  }
};

export default CoinItem;