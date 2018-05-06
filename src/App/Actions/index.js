import {
  REQUEST,
  SUCCESS,
  FAILURE,
  RESET_ERROR_MESSAGE,
} from './Types';

export * from '../../App/../Modules/CoinsList/Actions';

export const createRequestTypes = base => [REQUEST, SUCCESS, FAILURE].reduce((action, type) => {
  let actionType = action[type];
  actionType = `${base}_${type}`;
  return actionType;
});

export const action = (type, payload = {}) => ({ type, ...payload });

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);
