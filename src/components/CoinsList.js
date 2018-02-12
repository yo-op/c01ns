import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinItem from './CoinItem';
import { ListItem } from 'react-native-elements';
import colors from './../config/colors'

class CoinsList extends Component {

  static propTypes = {
    coins: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      coins: [],
      error: null,
      refreshing: false
    };
  }

  componentWillMount() {

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

  renderItem = ({coin}) => (
    <CoinItem coin={coin} />
  );

  render() {
    return (
      <FlatList
        data={this.props.coins}
        renderItem={this.renderItem}
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