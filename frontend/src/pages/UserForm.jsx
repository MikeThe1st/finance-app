import React from 'react'
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import TransactionHistory from '../components/TransactionHistory.jsx';


const UserForm = () => {
  const transactions = ['Transakcja 1', 'Transakcja 2', 'Transakcja 3'];

  return (
    <div>
      <Navbar />
     
      <TransactionHistory transactions={transactions} />
    
      <Footer />
    </div>
  );
};

export default UserForm

