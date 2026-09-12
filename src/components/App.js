import React from "react";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container">
      <h1>JSX Keyword Replacement Challenge</h1>

      <label htmlFor="name">Name:</label>
      <input id="name" type="text" placeholder="Enter your name" />

      <br />
      <br />

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
