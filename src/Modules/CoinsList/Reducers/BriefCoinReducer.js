import {
  BRIEF_COIN_DATA,
  BRIEF_COIN_DATA_FETCH_SUCCESS,
  BRIEF_COIN_DATA_FETCH_FAIL,
} from '../../../App/Actions';

const INITIAL_STATE = {
  data: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRIEF_COIN_DATA:
      return { ...state, loading: true, error: '' };
    case BRIEF_COIN_DATA_FETCH_SUCCESS:
      return { ...state, data: action.payload };
    case BRIEF_COIN_DATA_FETCH_FAIL:
      return { ...state, error: 'Can not fetch data!', loading: false };
    default:
      return state;
  }
};
