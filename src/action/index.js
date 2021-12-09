export const  GET_NEWS= 'GET_NEWS';
export const  SEARCH_NEWS= 'SEARCH_NEWS';
export const  SET_SEARCH= 'SET_SEARCH';


export const  getNews= (payload) => ({ type: GET_NEWS, payload });
export const  searchNews= (payload) => ({ type: SEARCH_NEWS, payload });
export const  setSearch= (payload) => ({ type: SET_SEARCH, payload });