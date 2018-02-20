import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import colors from './../config/colors';
import Cryptocompare from '../networking/Cryptocompare';

const  sampleData = [5, 10, 5, 20];

class SparkLines extends Component {

  render() {
    return(
      <Sparklines data={sampleData}>
        <SparklinesLine style={{ fill: 'none' }} />
        <SparklinesSpots />
      </Sparklines>
    );
  }
}

export default SparkLines;