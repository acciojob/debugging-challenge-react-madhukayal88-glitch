import React from 'react';

function UserCard({ user }) {
  const [isHovered, setIsHovered] = React.useState(false);

  // FIXED: onMouseEnter instead of onmouseenter
  // FIXED: onMouseLeave instead of onmouseleave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`user-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span className="role-badge">{user.role}</span>
      
      {/* FIXED: onClick instead of onclick */}
      <button 
        className="view-btn"
        onClick={() => alert(`Viewing ${user.name}'s profile`)}
      >
        View Profile
      </button>
    </div>
  );
}

export default UserCard;
