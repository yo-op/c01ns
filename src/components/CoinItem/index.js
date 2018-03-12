import React, { Component, } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import styled from 'styled-components/native';
import CoinName from './CoinName';

const TableRow = styled.View`
  height: 64px;
  border-bottom-width: 1px;
  border-color: #4C4C4C;
`;

class CoinItem extends Component {

  static propTypes = {
    coinId: PropTypes.string,
    coinTotalCoinSupply: PropTypes.string
  };

  render() {
    console.log(this.props);

    const { titleStyle, subTitleStyle } = styles;

    return (
      <TouchableOpacity>
        <TableRow>
          <CoinName />
          <Text style={subTitleStyle}>
            {this.props.coinTotalCoinSupply}
          </Text>
        </TableRow>
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