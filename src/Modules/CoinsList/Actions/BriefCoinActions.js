import _ from 'lodash';
import {
  BRIEF_COIN_DATA ,
  BRIEF_COIN_DATA_FETCH_SUCCESS,
  BRIEF_COIN_DATA_FETCH_FAIL
} from '../../../App/Actions/types';

export const getBriefCoinData = (coinName, currency) => {
  return async (dispatch) => {

    dispatch({ type: BRIEF_COIN_DATA });

    try {
      const response = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinName}&tsyms=${currency}&extraParams=c01ns`);
      const responseJson = await response.json();

      console.log(responseJson.DISPLAY.BTC);
      const obj  = {
        coinName: coinName,
        currency: currency
      };
      console.log(obj);
      const data = responseJson;
      return briefCoinDataFetchSuccess(dispatch, data);
    } catch(error) {
      briefCoinDataFetchFail(dispatch);
    }
  };
};

const briefCoinDataFetchFail = (dispatch) => {
  dispatch({ type: BRIEF_COIN_DATA_FETCH_FAIL });
};

const briefCoinDataFetchSuccess = (dispatch, data) => {
  dispatch({
    type: BRIEF_COIN_DATA_FETCH_SUCCESS,
    payload: data
  });
};