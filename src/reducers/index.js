import { combineReducers } from 'redux';
import NewsData from './NewsData';
import searchNewsData from './Search';
import BookMarks from './Bookmarks';
const reducer = combineReducers({
    NewsData,
    searchNewsData,
    BookMarks
});
export default reducer;