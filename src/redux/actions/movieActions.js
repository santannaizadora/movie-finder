import { ActionTypes } from "../constants/action-types";

export const getMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};

export const clearMovies = () => {
  return {
    type: ActionTypes.CLEAR_MOVIES,
  };
};

export const movieError = (error) => {
  return {
    type: ActionTypes.MOVIE_ERROR,
    payload: error,
  };
};
