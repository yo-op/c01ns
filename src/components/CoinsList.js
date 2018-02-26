import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllCoins } from '../actions';
import CoinItem from './CoinItem';
import colors from './../config/colors';

class CoinsList extends Component {

  static propTypes = {
    coins: PropTypes.array,
    getAllCoins: PropTypes.func
  };

  componentWillMount(){
    this.props.getAllCoins();
  }

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
    console.log(this.state);
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
    coins : state.allCoins.data
  };
};

export default connect(mapStateToProps, { getAllCoins })(CoinsList);

