import { combineReducers } from 'redux';
import NewsData from './NewsData';
import searchNewsData from './Search';
 const reducer = combineReducers({
    NewsData,
    searchNewsData
});
export default reducer;