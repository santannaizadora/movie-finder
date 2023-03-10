import { Input, Button, Text, Toast } from "@ui5/webcomponents-react";
import React, { useState, useRef } from "react";
import MovieCard from "../../components/MovieCard";
import "./style.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function Main() {
  const [searchText, setSearchText] = useState("");

  const toast = useRef(null);

  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movie);
  const error = useSelector((state) => state.movie.error);

  const searchMovies = async () => {
    const response = await axios
      .get(`http://www.omdbapi.com/?t=${searchText}&plot=full&apikey=f5b3bed5`)
      .catch((err) => {
        showErrorMessage(err.message);
      });

    response.data.Error
      ? showErrorMessage(response.data.Error)
      : dispatch({ type: "SET_MOVIES", payload: response.data });
  };

  const clearMovies = () => {
    setSearchText("");
    dispatch({ type: "CLEAR_MOVIES" });
  };

  const showErrorMessage = (error) => {
    dispatch({ type: "SET_ERROR", payload: error });
    toast.current.show();
  };

  return (
    <div className="container">
      <Toast ref={toast} placement="TopEnd">
        Error: {error}
      </Toast>
      <Text className="title">Movie Finder</Text>
      <Text className="text">
        Search the movie you want to watch and find the plot, actors and review.
      </Text>
      <div className="search-container">
        <Input
          className="input"
          placeholder="Search for a movie"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button className="button" onClick={searchMovies}>
          Search
        </Button>
        <Button className="button" onClick={clearMovies}>
          Reset
        </Button>
      </div>
      {movie && <MovieCard movie={movie} />}
    </div>
  );
}
