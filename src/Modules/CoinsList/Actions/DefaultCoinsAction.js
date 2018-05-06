import map from 'lodash.map';
import {
  DEFAULT_COINS_DATA,
  DEFAULT_COINS_DATA_FETCH_SUCCESS,
  DEFAULT_COINS_DATA_FETCH_FAIL,
} from '../../../App/Actions/Types';

const defaultCoinsDataFetchFail = (dispatch) => {
  dispatch({ type: DEFAULT_COINS_DATA_FETCH_FAIL });
};

const defaultCoinsDataFetchSuccess = (dispatch, data) => {
  dispatch({
    type: DEFAULT_COINS_DATA_FETCH_SUCCESS,
    payload: data,
  });
};

const getDefaultCoins = () => async (dispatch) => {
  dispatch({ type: DEFAULT_COINS_DATA });

  try {
    const response = await fetch('https://min-api.cryptocompare.com/data/coin/watchlist?fsyms=BTC,ETH,DASH&tsym=USD');
    const responseJson = await response.json();

    const data = map(responseJson.Data, (val, key) => ({ ...val, key }));
    return defaultCoinsDataFetchSuccess(dispatch, data);
  } catch (error) {
    defaultCoinsDataFetchFail(dispatch);
    return error;
  }
};

export default getDefaultCoins;

