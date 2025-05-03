import React, { useEffect, useState } from 'react';

const Admin = ({ users, saveUsers }) => {
  const [admins, setAdmins] = useState([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');

  useEffect(() => {
    // Filter admins only (excluding hardcoded admin)
    const adminUsers = users.filter(user => user.role === 'admin');
    setAdmins(adminUsers);
  }, [users]);

  const addAdmin = () => {
    if (!newAdminEmail || !newAdminPassword) {
      alert('Email and password required.');
      return;
    }

    if (users.find(u => u.email === newAdminEmail)) {
      alert('This email is already registered.');
      return;
    }

    const newAdmin = {
      email: newAdminEmail,
      password: newAdminPassword,
      role: 'admin',
    };

    const updatedUsers = [...users, newAdmin];
    saveUsers(updatedUsers);
    setAdmins([...admins, newAdmin]);
    setNewAdminEmail('');
    setNewAdminPassword('');
    alert('New administrator added.');
  };

  const removeAdmin = (email) => {
    const confirmed = window.confirm(`Are you sure you want to remove ${email} as an administrator?`);
    if (!confirmed) return;

    const updatedUsers = users.filter(user => user.email !== email);
    saveUsers(updatedUsers);
    setAdmins(admins.filter(admin => admin.email !== email));
  };

  return (
    <div style={{ marginLeft: '260px', padding: '20px' }}>
      <h2>Authorized Administrators</h2>
      <div style={{ background: '#2e2f31', padding: '20px', borderRadius: '10px', maxWidth: '600px' }}>
        <h3>Add New Administrator</h3>
        <input
          type="email"
          placeholder="Email"
          value={newAdminEmail}
          onChange={(e) => setNewAdminEmail(e.target.value)}
          style={inputStyle}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={newAdminPassword}
          onChange={(e) => setNewAdminPassword(e.target.value)}
          style={inputStyle}
        />
        <br />
        <button onClick={addAdmin} style={buttonStyle}>Add Admin</button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Current Admins</h3>
        <ul>
          <li>admin (default, cannot remove)</li>
          {admins.map((admin, idx) => (
            <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {admin.email}
              <button onClick={() => removeAdmin(admin.email)} style={{ ...buttonStyle, backgroundColor: 'red' }}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Example styles (reuse your existing styles if defined globally)
const inputStyle = {
  padding: '10px',
  margin: '5px 0',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#0066ff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Admin;
