import React from 'react';
import './styles.css';

function App() {
  const handleClick = () => {
    alert('Button clicked successfully!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="app-container">
      <h1>🔧 JSX Keyword Replacement Challenge</h1>
      <p className="subtitle">All JSX errors have been fixed!</p>

      <div className="form-section">
        <h2>📝 Contact Form</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              placeholder="Enter your message" 
              className="form-input"
              rows="3"
            />
          </div>

          <button 
            type="submit" 
            className="btn-submit"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="info-section">
        <h3>✅ Fixed Issues:</h3>
        <ul className="fix-list">
          <li>✅ <span className="highlight">class</span> → <span className="highlight">className</span></li>
          <li>✅ <span className="highlight">for</span> → <span className="highlight">htmlFor</span></li>
          <li>✅ <span className="highlight">onclick</span> → <span className="highlight">onClick</span></li>
          <li>✅ All JSX attributes now follow camelCase convention</li>
        </ul>
      </div>

      <div className="footer">
        <p>💡 Remember: JSX uses camelCase for attributes (className, onClick, htmlFor)</p>
      </div>
    </div>
  );
}

export default App;
