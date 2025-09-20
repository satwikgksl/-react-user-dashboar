import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import UserCard from '../components/UserCard';

function Dashboard() {
  const { users, addUser, search, setSearch } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    addUser(formData);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <input
        type="text"
        placeholder="Search by name..."
        className="border p-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {users
          .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
          .map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded max-w-md">
        <h2 className="font-bold mb-2">Add New User</h2>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2 rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          className="border p-2 w-full mb-2 rounded"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add User</button>
      </form>
    </div>
  );
}

export default Dashboard;
