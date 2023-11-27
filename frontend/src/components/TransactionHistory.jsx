import React from 'react';

const TransactionHistory = ({ transactions }) => {


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        width: '40%',
        border: '2px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        margin: 'auto',
        marginTop: '50px',
        backgroundColor: '#fff',
      }}
    >
      
      <div style={{ width: '100%' }}>
      <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Historia Transakcji</h3>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>{transaction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
