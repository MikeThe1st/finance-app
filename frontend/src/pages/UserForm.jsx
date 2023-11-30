
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import TransactionHistory from '../components/TransactionHistory.jsx';
import CircleWithMailComponent from '../components/CircleWithMailComponent.jsx';

import React, { useState, useEffect } from 'react';
import axios from 'axios'

const UserForm = () => {
  // let transactions = ['Transakcja 1', 'Transakcja 2', 'Transakcja 3'];
  const [transactions, setTransactions] = useState([])
  const [user, setUser] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/backend/user`, { withCredentials: true })
        // transactions = response.data[0].transactions
        // console.log(response.data[0])
        setUser(response.data[0])
        setTransactions(user.transactions)
        setIsLoading(false)
        // if(!user) window.location = '/login'
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }

    getUser()
  }, [])

  useEffect(() => {
    // console.log(user?.transactions)
    if (user) {
      console.log(user?.transactions)
      setTransactions(user?.transactions)
    }
    else setTransactions([])
    // setTransactions(user?.transactions)
  }, [user])


  return (
    isLoading ? (
      <div>Loading...</div>
    ) :
      (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
          <Navbar />
          <CircleWithMailComponent user={user} />
          <TransactionHistory transactions={transactions} />
            <Footer />
        </div>
      )

  );
};

export default UserForm;
