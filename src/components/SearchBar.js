import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


function SearchBar(props) {
  const [name, setName] = useState("");
  let history = useHistory();
  
  const onSubmitHandler = e => {
    e.preventDefault();
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_name=${name}`)
      .then(res => history.push(res.data.name))
      .catch(err => console.log(err));
      console.log(history)
  };

  return (
    <form onSubmit={e => onSubmitHandler(e)} className="search-bar">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="title of brewery"
      />
      <button type="submit" disabled={!name}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
