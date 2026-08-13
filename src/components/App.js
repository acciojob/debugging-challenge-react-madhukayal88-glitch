import React from "react";

function App() {
  return (
    <div className="App">
      <h1>JSX Keyword Replacement Challenge</h1>
      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
