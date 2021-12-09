import { SEARCH_NEWS,SET_SEARCH } from "../action";

const initialState = {
    search:"",
    searchdata:[]
}

export default function searchNewsData(state = initialState, action) {

    switch (action.type) {
        case SEARCH_NEWS:
            return {
                ...state,
                search: action.payload,
            }
            case SET_SEARCH:
            return {
                ...state,
                searchdata: action.payload,
            }
        default:
            return state;
    }
}