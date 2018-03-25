import { combineReducers } from 'redux';
import allCoins from '../../Modules/CoinsList/Reducers/AllCoinsReducer';
import briefCoinData from '../../Modules/CoinsList/Reducers/BriefCoinReducer';
import defaultCoins from '../../Modules/CoinsList/Reducers/DefaultCoinsReducer';
// import UserCoinsReducer from './UserCoinsReducer';
// import SearchResultsReducer from './SearchResultsReducer';
// import SelectedCoinReducer from './SelectedCoinReducer';

export default combineReducers({
  allCoins,
  briefCoinData,
  defaultCoins
  // userCoins: UserCoinsReducer,
  // searchResults: SearchResultsReducer,
  // selectedCoin: SelectedCoinReducer
});