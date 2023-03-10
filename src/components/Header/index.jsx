import React from "react";
import { Text, FlexBox, Icon } from "@ui5/webcomponents-react";
import "./style.scss";

export default function Header() {
  return (
    <FlexBox className="header">
      <Text className="header-text">Movie Finder</Text>
      <Icon className="header-icon" design="Contrast" name="search"/>
    </FlexBox>
  );
}
