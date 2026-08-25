import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Fixed: class → className */}
      <div className="container">
        {/* Fixed: for → htmlFor */}
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username"
          placeholder="Enter username"
        />
        
        {/* Fixed: onclick → onClick */}
        <button onClick={() => console.log('Button clicked')}>
          Click Me
        </button>
        
        {/* Fixed: onchange → onChange */}
        <select onChange={(e) => console.log(e.target.value)}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        
        {/* Fixed: onsubmit → onSubmit */}
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            placeholder="Enter email"
          />
          
          {/* Fixed: type attribute for submit button */}
          <button type="submit">Submit</button>
        </form>
        
        {/* Fixed: tabindex → tabIndex */}
        <div tabIndex={0}>
          Focusable element
        </div>
        
        {/* Fixed: maxlength → maxLength */}
        <input 
          type="text" 
          maxLength={50}
          placeholder="Max 50 characters"
        />
        
        {/* Fixed: readonly → readOnly */}
        <input 
          type="text" 
          readOnly
          value="Read only text"
        />
        
        {/* Fixed: autofocus → autoFocus */}
        <input 
          type="text" 
          autoFocus
          placeholder="Auto focused input"
        />
      </div>
    </div>
  );
}

export default App;
