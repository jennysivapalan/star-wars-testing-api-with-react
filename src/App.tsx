import "./App.css";
import { useEffect, useState } from "react";
import Main from "./components/main/mainLayout";

function App() {
  const endpoint = "https://swapi.dev/api/people";
  const [name, setName] = useState<string>("Fetching name...");
  const [statusCode, setStatusCode] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const status = await response.status;
        setStatusCode(status);

        if (status === 200) {
          const json = await response.json();
          setName(json.results[0].name);
        } else setName("");
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return <Main status={statusCode} name={name} />;
}

export default App;
