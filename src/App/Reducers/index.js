import { combineReducers } from 'redux';
import UserCoinsReducer from './UserCoinsReducer';

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }

  return state;
}

const rootReducer = combineReducers({
  UserCoinsReducer
});

export default rootReducer;
