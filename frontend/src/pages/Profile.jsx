// src/pages/Profile.jsx
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error('Profile fetch failed:', err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">👤 Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
