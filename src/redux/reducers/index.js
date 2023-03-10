import { movieReducer } from "./movieReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
    movie: movieReducer,
});
