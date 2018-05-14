import {
  ALL_COINS_DATA,
  ALL_COINS_DATA_FETCH_SUCCESS,
  ALL_COINS_DATA_FETCH_FAIL,
} from '../../../App/Actions';

const INITIAL_STATE = {
  data: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_COINS_DATA:
      return { ...state, loading: true, error: '' };
    case ALL_COINS_DATA_FETCH_SUCCESS:
      return { ...state, ...INITIAL_STATE, data: action.payload };
    case ALL_COINS_DATA_FETCH_FAIL:
      return { ...state, error: 'Can not fetch data!', loading: false };
    default:
      return state;
  }
};
