import React from 'react';

function App() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>JSX Keyword Replacement Challenge</h1>
      <form onSubmit={handleClick}>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" onChange={handleChange} />
        <button type="submit" className="btn" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
