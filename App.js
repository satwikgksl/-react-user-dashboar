import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-center font-bold">
          <Link to="/">React User Dashboard</Link>
        </header>
        <main className="p-6">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/user/:id' element={<UserDetails />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
