import { GET_NEWS } from "../action";

const initialState = {
    data: [],
}

export default function NewsData(state = initialState, action) {

    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                data: action.payload,
            }

        default:
            return state;
    }
}