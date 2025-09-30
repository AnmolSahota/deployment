import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [message, setMessage] = useState("");
  let IP = "http://3.25.216.196";
  const fetchMessage = () => {
    fetch(`${IP}:5000/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Learned a CI-CD
        <p>{message || "Click the button to get a message from backend"}</p>
        <button onClick={fetchMessage}>Fetch from a backend</button>
      </header>
    </div>
  );
}

export default App;
