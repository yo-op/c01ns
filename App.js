import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/App/Store/ConfigureStore';
import { NavBar, AddCoinButton } from './src/App/Components';
import CoinsList from './src/Modules/CoinsList/Components/CoinsList';
import colors from './src/App/Configs/Colors';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ backgroundColor: colors.dark, flex: 1.0 }}>
        <StatusBar barStyle="light-content" />
        <NavBar />
        <CoinsList />
        <AddCoinButton />
      </View>
    </Provider>
  );
};

export default App;
