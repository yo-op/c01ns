
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../Reducers';

const persistConfig = {
  key: '',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const configureStore = () => {
  const middleWares = [thunk];

  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });

  return createStore(persistedReducer, composeEnhancers(
    applyMiddleware(...middleWares)
  ));
};