import React from 'react';
import { View } from 'react-native';
import colors from '../../Configs/Colors';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: colors.cellSeparator,
    position: 'relative'
  }
};

export { CardSection };