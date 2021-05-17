import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [establishments, setEstablishments] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appW5aZLBJAcfOqhH/Dallas%20Establishments",
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_SECRET}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setEstablishments(data.records);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-red-400">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {JSON.stringify(establishments)}
      </header>
    </div>
  );
}

export default App;
