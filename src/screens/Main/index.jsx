import { Input, Button, Text } from "@ui5/webcomponents-react";
import React from "react";
import TestComponent from "../../components/MovieCard";
import "./style.scss";

export default function Main() {
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
        <Input className="input" />
        <Button className="button">Search</Button>
        <Button className="button">Reset</Button>
      </div>
      <TestComponent />
    </div>
  );
}
