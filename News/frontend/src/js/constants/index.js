import { ADD_NEWS } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_NEWS, payload };
}

export function fetchNews(payload){
    return {type: FETCH_NEWS, payload}
}