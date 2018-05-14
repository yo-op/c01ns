import map from 'lodash.map';
import {
  ALL_COINS_DATA,
  ALL_COINS_DATA_FETCH_SUCCESS,
  ALL_COINS_DATA_FETCH_FAIL,
} from '../../../App/Actions/Types';

const coinsDataFetchFail = (dispatch) => {
  dispatch({ type: ALL_COINS_DATA_FETCH_FAIL });
};

const coinsDataFetchSuccess = (dispatch, data) => {
  dispatch({
    type: ALL_COINS_DATA_FETCH_SUCCESS,
    payload: data,
  });
};

const getAllCoins = () => async (dispatch) => {
  dispatch({ type: ALL_COINS_DATA });

  try {
    const response = await fetch('https://min-api.cryptocompare.com/data/all/coinlist');
    const responseJson = await response.json();
    const data = map(responseJson.Data, (val, key) => ({ ...val, key }));
    return coinsDataFetchSuccess(dispatch, data);
  } catch (error) {
    coinsDataFetchFail(dispatch);
    return error;
  }
};

export default getAllCoins;
