import {
  REQUEST,
  SUCCESS,
  FAILURE
} from './Types';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const COIN = createRequestTypes('COIN');

export const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE';
export const NAVIGATE = 'NAVIGATE';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

function action(type, payload = {}) {
  return { type, ...payload };
}

export const coin = {
  request: data => action(COIN[REQUEST], { data }),
  success: (data, response) => action(COIN[SUCCESS], { data, response }),
  failure: (data, error) => action(COIN[FAILURE], { data, error }),
};

export const updateRouterState = state => action(UPDATE_ROUTER_STATE, { state });
export const navigate = pathname => action(NAVIGATE, { pathname });

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);

