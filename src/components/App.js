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
    // FIX: Changed 'class' to 'className'
    <div className="container">
      <header className="header">
        <h1>JSX Keyword Replacement Challenge</h1>
      </header>

      <main className="content">
        <form onSubmit={handleSubmit}>
          {/* FIX: Changed 'for' to 'htmlFor' */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            // FIX: Changed 'onchange' to 'onChange'
            onChange={handleChange}
            // FIX: Changed 'autocomplete' to 'autoComplete'
            autoComplete="off"
          />

          {/* FIX: Changed 'onclick' to 'onClick' */}
          <button type="button" onClick={handleClick} className="btn">
            Click Me
          </button>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
