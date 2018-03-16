import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBriefCoinData } from '../actions';
import CoinItem from './CoinItem';

class CoinsList extends Component {

  static propTypes = {
    coins: PropTypes.object,
    getBriefCoinData: PropTypes.func
  };

  componentWillMount(){
    this.props.getBriefCoinData('BTC', 'USD');
  }

  _keyExtractor = (item, index) => item.Id

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
    coins : state.briefCoinData.data
  };
};

export default connect(mapStateToProps, { getBriefCoinData })(CoinsList);

