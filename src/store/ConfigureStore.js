
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

export function configureStore() {
  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });

  const store = createStore(reducers, composeEnhancers(
    applyMiddleware(reduxThunk)
  ));

  return store;
}