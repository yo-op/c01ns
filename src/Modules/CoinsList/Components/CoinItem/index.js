import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import CoinName from './CoinName';
import CoinPrice from './CoinPrice';

const TableRow = styled.View`
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  border-bottom-width: 1px;
  border-color: #4c4c4c;
`;

class CoinItem extends Component {
  render() {
    return (
      <TouchableOpacity>
        <TableRow>
          <CoinName
            coinShortName={this.coinShortName}
            coinFullName={this.coinFullName}
          />
          <CoinPrice />
        </TableRow>
      </TouchableOpacity>
    );
  }
}

CoinItem.prototype = {
  coinId: PropTypes.string,
  coinShortName: PropTypes.string,
  coinFullName: PropTypes.string,
  coinTotalCoinSupply: PropTypes.string,
};

export default CoinItem;
