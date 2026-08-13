import React from 'react';
import './App.css';

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>JSX Keyword Replacement Challenge</h1>
        
        <form onSubmit={handleClick}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            autoComplete="off"
            tabIndex="1"
          />

          <button type="submit" className="btn" onClick={handleClick}>
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
