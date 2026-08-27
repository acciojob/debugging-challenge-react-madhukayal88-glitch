import React, { useState } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'male',
    comments: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setShowDetails(true);
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleReset = () => {
    setUserData({
      name: '',
      email: '',
      age: '',
      gender: 'male',
      comments: ''
    });
    setIsSubmitted(false);
    setShowDetails(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Registration Form</h1>
        <p>JSX Keyword Replacement Challenge</p>
      </header>

      <main className="main-content">
        <section className="form-section">
          <h2>Registration Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                className="form-input"
                type="number"
                id="age"
                name="age"
                value={userData.age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                min="1"
                max="120"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                className="form-input"
                id="gender"
                name="gender"
                value={userData.gender}
                onChange={handleInputChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <textarea
                className="form-input"
                id="comments"
                name="comments"
                value={userData.comments}
                onChange={handleInputChange}
                placeholder="Enter any additional comments"
                rows="4"
              />
            </div>

            <div className="button-group">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>

              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </section>

        <section className="details-section">
          <h2>Registration Details</h2>

          {isSubmitted ? (
            <>
              <button
                className="btn btn-toggle"
                onClick={handleToggleDetails}
              >
                {showDetails ? 'Hide Details' : 'Show Details'}
              </button>

              {showDetails && (
                <div className="details-card">
                  <h3>Submitted Information:</h3>
                  <div className="detail-item">
                    <strong>Name:</strong> {userData.name}
                  </div>
                  <div className="detail-item">
                    <strong>Email:</strong> {userData.email}
                  </div>
                  <div className="detail-item">
                    <strong>Age:</strong> {userData.age}
                  </div>
                  <div className="detail-item">
                    <strong>Gender:</strong> {userData.gender}
                  </div>
                  {userData.comments && (
                    <div className="detail-item">
                      <strong>Comments:</strong> {userData.comments}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <p className="placeholder">
              No registration data submitted yet. Please fill out the form.
            </p>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>All JSX attributes are properly formatted</p>
      </footer>
    </div>
  );
}

export default App;
