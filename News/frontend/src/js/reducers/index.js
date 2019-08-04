import { combineReducers } from "redux";
import newsReducer from "./news"

const rootReducer = combineReducers({
    newsResults: newsReducer
})

export default rootReducer;
