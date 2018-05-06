import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

class SparkLines extends Component {
  render() {
    return (
      <Sparklines data={this.sampleData}>
        <SparklinesLine style={{ fill: 'none' }} />
        <SparklinesSpots />
      </Sparklines>
    );
  }
}

export default SparkLines;
