import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/index';
import { Header } from './src/components/common';
import colors from './src/config/colors';
import CoinsList from './src/components/CoinsList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ backgroundColor: colors.dark, flex: 1.0 }}>
        <StatusBar barStyle="light-content" />
        <Header headerText="Coins" />
        <CoinsList />
      </View>
    </Provider>
  );
};

export default App;