import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBriefCoinData } from '../Actions';
import CoinItem from './CoinItem';

class CoinsList extends Component {
  // componentWillMount() {
  //   this.props.getBriefCoinData('BTC', 'USD');
  // }

  keyExtractor = (item, index) => item.Id

  renderItem = ({ item }) => (
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
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

CoinsList.propTypes = {
  coins: PropTypes.object,
  getBriefCoinData: PropTypes.func
};

const mapStateToProps = state => ({
  coins: state.briefCoinData.data
});

export default connect(mapStateToProps, { getBriefCoinData })(CoinsList);

