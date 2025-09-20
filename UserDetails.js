import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function UserDetails() {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const user = users.find((u) => u.id.toString() === id);

  if (!user) return <p>User not found</p>;

  return (
    <div className="bg-white shadow p-6 rounded">
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      {user.company && <p>Company: {user.company.name}</p>}
      {user.address && <p>Address: {user.address.street}, {user.address.city}</p>}
      <Link to="/" className="text-blue-600 mt-4 block">⬅ Back to Dashboard</Link>
    </div>
  );
}

export default UserDetails;
