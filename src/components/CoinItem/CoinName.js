import React, { Component, } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const CoinShortName = styled.Text`
    font-family: 'Papyrus';
    font-size: 16px;
    line-height: 19px;
    color: white;
    margin-bottom: 2px;
`;

const CoinFullName = styled.Text`
    font-family: 'Papyrus';
    font-size: 14px;
    line-height: 16px;
    color: rgba(255,255,255, 0.5);
`;

const CoinNameWrapper = styled.View`
    display: flex;
    flex-direction: column; 
`;

class CoinName extends Component {

    static propTypes = {
        coinShortName: PropTypes.string,
        coinFullName: PropTypes.string,
    };

    render() {
        return(
            <CoinNameWrapper>
                <CoinShortName>{this.props.coinShortName}</CoinShortName>
                <CoinFullName>{this.props.coinFullName}</CoinFullName>
            </CoinNameWrapper>
        );
    }
}

export default CoinName;