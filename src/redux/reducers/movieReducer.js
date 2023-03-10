import { ActionTypes } from "../constants/action-types";

const initialState = {
    movie: null,
    loading: false,
    error: null,
};

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return { ...state, movie: payload, loading: false, error: null };
        case ActionTypes.CLEAR_MOVIES:
            return { ...state, movie: payload, loading: false, error: null };
        case ActionTypes.SET_ERROR:
            return { ...state, movie: null, error: payload, loading: false };
        default:
            return state;
    }
}