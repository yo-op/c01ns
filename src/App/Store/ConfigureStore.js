import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware, { END } from 'redux-saga';
// import { persistReducer } from 'redux-persist';
// import { persistConfig } from './PersistConfig';
import rootReducer from '../Reducers';

const configureStore = (initialState) => {
  // const persistedReducer = persistReducer(persistConfig, rootReducer);
  // const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(sagaMiddleware),
  );

  // store.runSaga = sagaMiddleware.run;
  // store.close = () => store.dispatch(END);
  return store;
};

export default configureStore;
