import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { CardSection } from './common/CardSection';
import colors from './../config/colors';

class CoinItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      coin: [],
      error: null,
    };
  }

  static propTypes = {
    coin: PropTypes.object
  };

  render() {
    const { titleStyle , rowStyle} = styles;
    console.log(this.state.coin);
    return(
      <CardSection style={rowStyle}>
        <Text style={titleStyle}>
          {this.coin['Id']}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    color: colors.textHeader,
    fontSize: 24,
    paddingLeft: 15
  },
  rowStyle: {
    height: 80
  }
};

export default CoinItem;