
import React from 'react';

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <header className="App-header">
        <h1>JSX Keyword Replacement Challenge</h1>

        <form onSubmit={handleClick} style={{ display: 'inline-block', textAlign: 'left' }}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <br />

          <button type="submit" className="btn" onClick={handleClick}>
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
