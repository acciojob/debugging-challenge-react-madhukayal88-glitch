import React, { useState } from 'react';

function UserForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Developer'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddUser(formData);
    setFormData({
      name: '',
      email: '',
      role: 'Developer'
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      
      <div className="form-group">
        {/* FIXED: htmlFor instead of for */}
        <label htmlFor="name">Name:</label>
        {/* FIXED: className instead of class */}
        <input
          className="form-input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
      </div>
      
      <div className="form-group">
        {/* FIXED: htmlFor instead of for */}
        <label htmlFor="email">Email:</label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
      </div>
      
      <div className="form-group">
        {/* FIXED: htmlFor instead of for */}
        <label htmlFor="role">Role:</label>
        <select
          className="form-input"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
          <option value="Tester">Tester</option>
        </select>
      </div>
      
      {/* FIXED: onClick instead of onclick */}
      <button className="submit-btn" type="submit" onClick={handleSubmit}>
        Add User
      </button>
    </form>
  );
}

export default UserForm;
