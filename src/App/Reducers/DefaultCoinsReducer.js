import {
  DEFAULT_COINS_DATA,
  DEFAULT_COINS_DATA_FETCH_SUCCESS,
  DEFAULT_COINS_DATA_FETCH_FAIL
} from '../Actions/types';

const INITIAL_STATE = {
  data: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DEFAULT_COINS_DATA:
      return { ...state, loading: true, error: '' };
    case DEFAULT_COINS_DATA_FETCH_SUCCESS:
      return { ...state, ...INITIAL_STATE, data: action.payload };
    case DEFAULT_COINS_DATA_FETCH_FAIL:
      return { ...state, error: 'Can not fetch data!', loading: false };
    default:
      return state;
  }
};