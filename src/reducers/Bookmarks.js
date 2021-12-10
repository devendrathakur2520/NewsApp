import { BOOKMARKS } from "../action";

const initialState = {
  bookmarks: [],
}
const getLocalStorage = (bookmarks = []) => {
  const data = JSON.stringify(bookmarks);
  localStorage.setItem('BookMarks', data)
}

export default function BookMarks(state = initialState, action) {

  switch (action.type) {
    case BOOKMARKS:
      const bookmarks = [...state.bookmarks, action.payload]
      getLocalStorage(bookmarks)
      return {
        ...state,
        bookmarks: [action.payload, ...state.bookmarks]
      }

    default:
      return state;
  }
}