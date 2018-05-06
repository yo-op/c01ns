import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CoinFullName,
  CoinShortName,
  CoinNameWrapper,
} from './Styles/CoinNameStyles';

class CoinName extends Component {
  render() {
    return (
      <CoinNameWrapper>
        <CoinFullName>{this.props.coinFullName}</CoinFullName>
        <CoinShortName>{this.props.coinShortName}</CoinShortName>
      </CoinNameWrapper>
    );
  }
}

CoinName.propTypes = {
  coinShortName: PropTypes.string,
  coinFullName: PropTypes.string,
};

export default CoinName;
