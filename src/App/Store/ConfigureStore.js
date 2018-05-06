import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { persistReducer } from 'redux-persist';

import { persistConfig } from './PersistConfig';
import reducers from '../Reducers';

const configureStore = () => {
  const persistedReducer = persistReducer(persistConfig, reducers);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};

export { configureStore as default };
