
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../Reducers';

export const configureStore = () => {
  const middleWares = [thunk];

  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });

  return createStore(reducers, composeEnhancers(
    applyMiddleware(...middleWares)
  ));
};