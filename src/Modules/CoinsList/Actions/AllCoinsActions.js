import _ from 'lodash';
import {
  ALL_COINS_DATA,
  ALL_COINS_DATA_FETCH_SUCCESS,
  ALL_COINS_DATA_FETCH_FAIL
} from '../../../App/Actions/Types';

export const getAllCoins = () => {
  return async (dispatch) => {

    dispatch({ type: ALL_COINS_DATA });

    try {
      const response = await fetch(
        'https://min-api.cryptocompare.com/data/all/coinlist'
      );
      const responseJson = await response.json();

      const data = _.map(responseJson.Data, (val, key) => {
        return {...val, key};
      });
      return coinsDataFetchSuccess(dispatch, data);
    } catch (error) {
      coinsDataFetchFail(dispatch);
    }
  };
};

const coinsDataFetchFail = (dispatch) => {
  dispatch({ type: ALL_COINS_DATA_FETCH_FAIL });
};

const coinsDataFetchSuccess = (dispatch, data) => {
  dispatch({
    type: ALL_COINS_DATA_FETCH_SUCCESS,
    payload: data
  });
};
