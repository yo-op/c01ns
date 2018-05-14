import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import colors from '../Configs/Colors';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: colors.cellSeparator,
    position: 'relative',
  },
};

const CardSection = props => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
);

CardSection.propTypes = {
  children: PropTypes.object,
};

export default CardSection;
