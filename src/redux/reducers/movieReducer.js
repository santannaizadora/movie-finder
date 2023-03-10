import { ActionTypes } from "../constants/action-types";

const initialState = {
    movies: [],
    loading: false,
    error: null,
};

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return { ...state, movies: payload, loading: false, error: null };
        case ActionTypes.CLEAR_MOVIES:
            return { ...state, movies: [], loading: false, error: null };
        case ActionTypes.SET_ERROR:
            return { ...state, movies: [], error: payload, loading: false };
        default:
            return state;
    }
}