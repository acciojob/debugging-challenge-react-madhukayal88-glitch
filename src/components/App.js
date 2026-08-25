import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = React.useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Developer'
    }
  ]);

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>JSX Fix Challenge</h1>
        <p>All attributes are properly formatted for JSX</p>
      </header>
      
      <main>
        <UserForm onAddUser={addUser} />
        
        <div className="user-list">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
