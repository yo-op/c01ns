import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistConfig } from './PersistConfig';
import reducers from '../Reducers';

export const configureStore = () => {

  const persistedReducer = persistReducer(persistConfig, reducers);
  const middleWares = [thunk];

  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });

  return createStore(persistedReducer, composeEnhancers(
    applyMiddleware(...middleWares)
  ));
};