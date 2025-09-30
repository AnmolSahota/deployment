import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = () => {
    fetch("http://YOUR_EC2_PUBLIC_IP:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || "Click the button to get a message from backend"}</p>
        <button onClick={fetchMessage}>Get Message</button>
      </header>
    </div>
  );
}

export default App;
