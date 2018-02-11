import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import CoinItem from './CoinItem';
import { List, ListItem } from 'react-native-elements';

class CoinsList extends Component {

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

  renderRow(coin) {
    return  <CoinItem coin={coin} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.coins}
        renderItem={({ item }) => (
          <ListItem
            title={`${item.title}`}
            subtitle={item.description}
            containerStyle={{ borderBottomWidth: 0 }}
          />
        )}
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