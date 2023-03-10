import { Input, Button, Text } from "@ui5/webcomponents-react";
import React, { useState } from "react";
import TestComponent from "../../components/MovieCard";
import "./style.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function Main() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.allMovies.movies);
  const error = useSelector((state) => state.allMovies.error);

  console.log(movies);
  console.log(error);

  const searchMovies = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchText}&plot=full&apikey=f5b3bed5`
    );
    console.log(response.data.Error)
    response.data.Error
      ? dispatch({ type: "SET_ERROR", payload: response.data.Error })
      : dispatch({ type: "SET_MOVIES", payload: response.data.Search });
  };

  const resetMovies = () => {
    dispatch({ type: "RESET_MOVIES" });
  };

  return (
    <div className="container">
      <Text className="title">Test</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <div className="search-container">
        <Input
          className="input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button className="button" onClick={searchMovies}>
          Search
        </Button>
        <Button className="button" onClick={resetMovies}>
          Reset
        </Button>
      </div>
        {error && <Text className="error">{error}</Text>}
      <TestComponent />
      <TestComponent />
      <TestComponent />
    </div>
  );
}
