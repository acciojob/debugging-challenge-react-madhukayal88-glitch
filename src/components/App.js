import React from "react";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="container">
      <h1 className="heading">JSX Keyword Fix</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" className="input" />
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
