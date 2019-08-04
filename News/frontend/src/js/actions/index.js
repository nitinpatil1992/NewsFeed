import axios from "axios";

export function addNews(payload) {
    return { type: "ADD_NEWS", payload }
};

export function fetchNews() {
    return function(dispatch) {
        return axios.get("http://localhost:8081/news?q=india").then(({data}) => {
            dispatch(setNews(data))
        })
    }
}