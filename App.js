import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/App/Store/ConfigureStore';
// import CoinsList from './src/Modules/CoinsList/Components/CoinsList';
import Colors from './src/App/Configs/Colors';
import {
  NavigationBar,
  SegmentedControl
} from './src/App/Components';


const store = configureStore();

const App = () => (
    <Provider store={store}>
      <View style={{ backgroundColor: Colors.dark, flex: 1.0 }}>
        <StatusBar barStyle="light-content" />
        <NavigationBar />
        <SegmentedControl />
      </View>
    </Provider>
);

export default App;
