import _ from 'lodash';
import React, { Component, Text } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinItem from './CoinItem';
import colors from './../config/colors';
import Cryptocompare from '../networking/Cryptocompare';
import data from '../mocks/coins.json';

const coinComponent = (coin) => {
  return () => {
    return <CoinItem coin={coin} />;
  };
};

class CoinsList extends Component {

  static propTypes = {
    coins: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      coins: [],
      error: null,
      refreshing: false
    };

    this.renderCoin = this.renderCoin.bind(this);
  }

  componentWillMount() {
    const newData = _.map(data.Data, (val, key) => {
      return {...val, key};
    });
    this.setState({ coins: newData });
  }

  componentDidMount() {
    //Cryptocompare.getAllCurrency();
  }

  renderSeparator = () => {
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

  renderCoin = ({coin}) => (
    coinComponent(coin)
  );

  render() {
    return (
      <FlatList
        data={this.state.coins}
        renderItem={this.renderCoin()}
        ItemSeparatorComponent={this.renderSeparator}
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