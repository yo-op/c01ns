import _ from 'lodash';
import {
  DEFAULT_COINS_DATA,
  DEFAULT_COINS_DATA_FETCH_SUCCESS,
  DEFAULT_COINS_DATA_FETCH_FAIL
} from './types';

export const getDefaultCoins = () => {
  return async (dispatch) => {

    dispatch({ type: DEFAULT_COINS_DATA });

    try {

    } catch {

    }

  };
};


const defaultCoinsDataFetchFail = (dispatch) => {
  dispatch({ type: DEFAULT_COINS_DATA_FETCH_FAIL });
};

const defaultCoinsDataFetchSuccess = (dispatch, data) => {
  dispatch({
    type: DEFAULT_COINS_DATA_FETCH_SUCCESS,
    payload: data
  });
};
