import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [coins, setCoins] = useState([]);

<<<<<<< HEAD
    branch volkan

  </div>
=======
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="App">
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a Currency</h1>
          <form>
            <input type="text" placeholder="Search" className="coin-input" />
          </form>
        </div>
      </div>
    </div>
  );
>>>>>>> 949ae7ebc6b21554089c9bc8b82a560eea6951fa
}

export default App;
