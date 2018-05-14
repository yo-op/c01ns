import React, { Component } from 'react';
import styled from 'styled-components/native';

const Price = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: white;
  margin-bottom: 2px;
  text-align: right;
`;

const PriceChange = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #21CE99;
  text-align: right;
`;

const CoinPriceWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

class CoinPrice extends Component {
  render() {
    return (
      <CoinPriceWrapper {...this}>
        <Price>$5356.01</Price>
        <PriceChange>+10.64%</PriceChange>
      </CoinPriceWrapper>
    );
  }
}

export default CoinPrice;
