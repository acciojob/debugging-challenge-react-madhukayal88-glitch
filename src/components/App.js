import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>JSX Keyword Replacement Challenge</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            autoComplete="off"
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
