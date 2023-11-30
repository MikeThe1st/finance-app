import React, { useState, useEffect } from 'react';
import axios from 'axios'

const TransactionHistory = ({ transactions }) => {
  console.log(transactions)
  return (
    transactions ? (
      <div className="flex flex-col items-center justify-center h-fit w-11/12 md:w-2/5 border-2 border-gray-300 rounded-lg p-8 mx-auto mt-24 bg-gray-800 mb-20">
        <h3 className="text-center text-white text-2xl mb-4">Historia Transakcji</h3>
        <ul className="w-full flex flex-col flex-wrap justify-center items-center text-white">
          {/* {transactions.map((transaction, index) => (
            <li key={index} className="text-white mb-2">
              {transaction}
            </li>
          ))} */}
          {transactions.map((transaction, index) => {
            const formattedDate = transaction.date.split('T')[0]
            return (
              <li className='text-center border' key={`transaction ${index}`}>
                <div className='text-bold text-xl text-green-700'>{`Transakcja ${index}`}</div>
                <div className='flex flex-row text-lg gap-3'>
                  <div>{`Firma: ${transaction.company}`}</div>
                  <div>{`Koszt: ${transaction.cost}$`}</div>
                  <div>{`Data: ${formattedDate}`}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    ) :
      (
        <button onClick={() => window.location.href = '/login'} className='w-20 h-20 bg-white'>Login</button>
      )


  );
};

export default TransactionHistory;
