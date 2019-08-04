import { ADD_NEWS } from "../constants/action-types";

const INITIAL_STATE = {
  newsTopic: "india",
  news: [],
  isFetching: false,
  error: undefined
};

const newsReducer = (state= INITIAL_STATE, action) => {

  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
        newsTopic: action.newsTopic,
      });
    case 'FETCH_NEWS_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        news: action.news,
        newsTopic: action.newsTopic
      });
    case 'FETCH_NEWS_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default newsReducer
