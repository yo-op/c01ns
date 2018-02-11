import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CoinItem extends Component{
  render() {

    const { titleStyle } = styles;

    return(
      <View>
        <Text style={titleStyle}>
          {this.coin.title}
        </Text>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default CoinItem;