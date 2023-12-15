import { useEffect, useState } from "react";
import darthLogo from "./assets/darth.svg";
import "./App.css";

function App() {
  const endpoint = "https://swapi.dev/api/people";
  const [name, setName] = useState<string>("aaa");

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((obj) => setName(obj.results[0].name))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <>
      <div>
        <a href="https://www.starwars.com/databank/darth-vader" target="_blank">
          <img src={darthLogo} className="logo react" alt="Darth logo" />
        </a>
      </div>
      <h1>Testing API calls in React with the Star Wars API </h1>
      <div className="card"></div>
      <p>{name}</p>
    </>
  );
}

export default App;
