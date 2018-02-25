import React, { Component, Text } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinItem from './CoinItem';
import colors from './../config/colors';
import Cryptocompare from '../networking/Cryptocompare';

class CoinsList extends Component {

  static propTypes = {
    coins: PropTypes.array
  };

  _keyExtractor = (item, index) => item.Id

  _renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: colors.cellSeparator
        }}
      />
    );
  };

  _renderItem = ({item}) => (
    <CoinItem
      coinId={item.Id}
      coinShortName={item.Name}
      coinFullName={item.FullName}
      coinTotalCoinSupply={item.TotalCoinSupply}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.coins}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    coins: state.allCoins
  };
};

export default connect(mapStateToProps)(CoinsList);