import React from "react";
import "./App.css";
import { Route} from "react-router-dom";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import About from "./components/About"
import SearchBar from "./components/SearchBar";







function App() {
  return (
    <div className="App">
        <NavBar/>
        <SearchBar/>
        <Route className="route1" exact path="/" component={Home}/>
        <Route className="route1" exact path="/About" component={About}/>
    </div>
  );
}

export default App;
