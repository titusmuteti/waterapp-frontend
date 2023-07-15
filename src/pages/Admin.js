import React, { useState } from 'react';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the password is correct based on the selected role
    if (role === 'Managing Director' && password === 'mdpassword') {
      console.log('Managing Director logged in successfully!');
    } else if (role === 'Systems Engineer' && password === 'sepassword') {
      console.log('Systems Engineer logged in successfully!');
    } else {
      console.log('Invalid password or role');
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            
            <div className="form-group">
              <label>Role:</label>
              <select
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="Managing Director">Managing Director</option>
                <option value="Systems Engineer">Systems Engineer</option>
              </select>
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
