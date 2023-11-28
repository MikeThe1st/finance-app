import React from 'react';

const TransactionHistory = ({ transactions }) => {


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30vh',
        width: '40%',
        border: '2px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        margin: 'auto',
        marginTop: '300px',
        backgroundColor: '#808080',
      }}
    >
      
      <div style={{ width: '100%' }}>
      <h3 style={{ textAlign: 'center', marginTop: '-100px' }}>Historia Transakcji</h3>
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