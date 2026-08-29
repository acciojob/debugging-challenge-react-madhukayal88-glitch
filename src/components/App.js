import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>JSX Keyword Replacement Challenge</h1>
      </header>

      <form onSubmit={handleClick} className="form-group">
        <label htmlFor="user-input">Enter Text:</label>
        <input
          type="text"
          id="user-input"
          className="input-field"
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          tabIndex="0"
        />

        <button type="submit" onClick={handleClick} className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
