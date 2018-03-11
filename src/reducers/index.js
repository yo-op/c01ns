import { combineReducers } from 'redux';
import  AllCoinsReducer from './AllCoinsReducer';
import DefaultCoinsReducer from './DefaultCoinsReducer';
import UserCoinsReducer from './UserCoinsReducer';
import SearchResultsReducer from './SearchResultsReducer';
import SelectedCoinReducer from './SelectedCoinReducer';

export default combineReducers({
  allCoins: AllCoinsReducer,
  userCoins: UserCoinsReducer,
  searchResults: SearchResultsReducer,
  selectedCoin: SelectedCoinReducer
});