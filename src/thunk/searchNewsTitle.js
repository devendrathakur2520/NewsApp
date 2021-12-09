import axios from "axios";
import React from "react";
import { setSearch } from "../action";
//lient.defaults.headers.common['Authorization'] = `Bearer 43d38eec6ade43048498afd700eaabaf `;

export const newsArticlesRequest = (title) => async (dispatch) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${title}}&sortBy=publishedAt&apiKey=43d38eec6ade43048498afd700eaabaf`)

        console.log(response.data)
        dispatch(setSearch([response.data]));
        //console.log(response.data)
    } catch (err) {
        // logs the error whatever error occured in try block
        console.log(err);
    }
}

