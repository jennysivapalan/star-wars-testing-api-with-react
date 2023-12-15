import { useState } from "react";
import darthLogo from "./assets/darth.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://www.starwars.com/databank/darth-vader" target="_blank">
          <img src={darthLogo} className="logo react" alt="Darth logo" />
        </a>
      </div>
      <h1>Testing API calls in React with the Star Wars API </h1>
      <div className="card"></div>
    </>
  );
}

export default App;
