import React, { useEffect, useState } from 'react';

function App() {
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null); // Track the user being edited

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/demo', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        getUsers();
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/demo', {
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEdit = (id) => {
    // Find the user by id
    const userToEdit = users.find(user => user._id === id);
    if (userToEdit) {
      setFormData(userToEdit); // Populate form with user data
      setEditUserId(id);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await fetch(`http://localhost:8080/demo/${editUserId}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        console.log('User updated successfully');
        getUsers();
        setFormData({}); // Clear form after update
        setEditUserId(null); // Reset edit mode
      } else {
        console.error('Failed to update user:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`http://localhost:8080/demo/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          console.log('User deleted successfully');
          getUsers();
        } else {
          console.error('Failed to delete user:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="">
      
      {/*
      <form onSubmit={editUserId ? handleUpdateUser : handleSubmit}>
        <label>Name:</label>
        <input type='text' placeholder='enter username' name='username' onChange={handleChange} value={formData.username || ''} />
        <label>Pass:</label>
        <input type='password' placeholder='enter pass' name='password' onChange={handleChange} value={formData.password || ''} />
        <button type="submit">{editUserId ? 'Update' : 'Submit'}</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Actions</th> 
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => handleEdit(user._id)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
          */}
    </div>
  );
}

export default App;
