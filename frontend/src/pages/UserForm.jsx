
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import TransactionHistory from '../components/TransactionHistory.jsx';
import CircleWithMailComponent from '../components/CircleWithMailComponent.jsx';

import React, { useState, useEffect } from 'react';
import axios from 'axios'

const UserForm = () => {
  const transactions = ['Transakcja 1', 'Transakcja 2', 'Transakcja 3'];

  const [user, setUser] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/backend/user`, { withCredentials: true })
        setUser(response.data.user[0])
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
        if(!user) window.location = '/login'
      }
    }

    getUser()
  }, [])


  return (
    isLoading ? (
      <div>Loading...</div>
    ) :
    (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <CircleWithMailComponent user={user}/>
        <TransactionHistory transactions={transactions} />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
        }}
      >
        <Footer />
      </div>
    </div>
    )
    
  );
};

export default UserForm;
