import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [breweries, setBrewery] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries`)
      .then(response => {
        console.log(response.data);
        setBrewery(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>

      {breweries.map(name => (
        <div>
          id: {name.id}
          brewery type: {name.brewery_type}
          brewery name: {name.name}
        </div>
       

      ))}
  </div>
  );
};

export default Home;
