import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/ConfigureStore';
// Views
import { Header } from './src/components/common';
import colors from './src/config/colors';
import CoinsList from './src/components/CoinsList';

const store = configureStore();
// console.disableYellowBox = true;

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