import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/ConfigureStore';
import Router from './src/Router';
import { Header } from './src/components/common';
import CoinsList from './src/components/CoinsList';
import colors from './src/config/colors';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ backgroundColor: colors.dark, flex: 1.0 }}>
        <StatusBar barStyle="light-content" />
        <Header headerText="Coins" />
        <CoinsList />
      </View>
    </Provider>
  );
};

export default App;