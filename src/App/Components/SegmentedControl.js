import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const styles = StyleSheet.create({
  tabsContainerStyle: {
    padding: 16
  },
  tabStyle: {
    height: 32,
    backgroundColor: '#18463C',
    borderWidth: 0,
    borderColor: 'transparent'
  },
  tabTextStyle: {
    fontSize: 16,
    lineHeight: 19,
    color: '#21CE99'
  },
  activeTabStyle: {
    backgroundColor: '#21CE99',
  },
  activeTabTextStyle: {
    color: 'white'
  }
});

class SegmentedControl extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {
    return (
      <View>
        <SegmentedControlTab
          borderRadius={32}
          tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          values={['All coins', 'My portfolio']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
      </View>
    );
  }
}

export default SegmentedControl;
