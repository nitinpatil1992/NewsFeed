import axios from "axios";
import { API_ROOT } from '../../config/api-config';

export function fetchNews(searchquery="india") {
    return function(dispatch) {
      dispatch({
        type: 'FETCH_NEWS_REQUEST',
        newsTopic: searchquery,
      });

        return axios.get(`${API_ROOT}/news`, {params: {'q': searchquery}}).then(({data}) => {
            dispatch({
                type: 'FETCH_NEWS_SUCCESS',
                news: data,
                newsTopic: searchquery,
            });
        }).catch((error) => {
            dispatch({
                type: 'FETCH_NEWS_FAILURE',
                error: error,
                newsTopic: searchquery,
            });
        })
    
    }
  }