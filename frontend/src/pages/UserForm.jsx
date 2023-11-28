import React from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import TransactionHistory from '../components/TransactionHistory.jsx';
import CircleWithMailComponent from '../components/CircleWithMailComponent.jsx';

const UserForm = () => {
  const transactions = ['Transakcja 1', 'Transakcja 2', 'Transakcja 3'];
  const userEmail = 'example@example.com';

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <CircleWithMailComponent userEmail="example@example.com" userImage="sciezka/do/twojego/obrazka.jpg" />
      <div style={{ paddingBottom: '60px' }}>
        <TransactionHistory transactions={transactions} />
      </div>
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
  );
};

export default UserForm;
