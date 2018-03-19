import { combineReducers } from 'redux';
import AllCoinsReducer from '../../Modules/CoinsList/Reducers/AllCoinsReducer';
import BriefCoinReducer from '../../Modules/CoinsList/Reducers/BriefCoinReducer';
import DefaultCoinsReducer from '../../Modules/CoinsList/Reducers/DefaultCoinsReducer';
// import UserCoinsReducer from './UserCoinsReducer';
// import SearchResultsReducer from './SearchResultsReducer';
// import SelectedCoinReducer from './SelectedCoinReducer';

export default combineReducers({
  allCoins: AllCoinsReducer,
  briefCoinData: BriefCoinReducer,
  defaultCoins: DefaultCoinsReducer,
  // userCoins: UserCoinsReducer,
  // searchResults: SearchResultsReducer,
  // selectedCoin: SelectedCoinReducer
});