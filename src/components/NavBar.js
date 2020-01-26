import React from "react";
import { Link } from "react-router-dom";
import waterLeaf from "./images/waterLeaf.jpeg";
import { WaterLeaf, TopBar } from "./styles/Styles"



export const NavBar = () => {
  return (
    <TopBar>
      <WaterLeaf alt="water leaf" src={waterLeaf}></WaterLeaf>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </TopBar>
  );
};
