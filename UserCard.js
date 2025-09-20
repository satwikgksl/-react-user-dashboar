import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
  return (
    <div className="bg-white p-4 shadow rounded hover:shadow-lg transition">
      <h3 className="font-bold text-lg">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
      <Link to={`/user/${user.id}`} className="text-blue-600 mt-2 inline-block">View Details</Link>
    </div>
  );
}

export default UserCard;
