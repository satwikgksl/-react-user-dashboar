import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let mounted = true;
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => { if(mounted) setUsers(res.data); })
      .catch(err => console.error(err));
    return () => { mounted = false; };
  }, []);

  const addUser = (newUser) => {
    const id = Date.now();
    setUsers(prev => [{ id, ...newUser }, ...prev]);
  };

  return (
    <UserContext.Provider value={{ users, addUser, search, setSearch }}>
      {children}
    </UserContext.Provider>
  );
};
