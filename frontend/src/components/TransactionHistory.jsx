import React, { useState, useEffect } from 'react';
import axios from 'axios'

const TransactionHistory = ({ transactions }) => {

  return (
    <div className="flex flex-col items-center justify-center h-1/3 w-11/12 md:w-2/5 border-2 border-gray-300 rounded-lg p-8 mx-auto mt-24 bg-gray-800">
      <h3 className="text-center text-white text-2xl mb-4">Historia Transakcji</h3>
      <ul className="w-full">
        {transactions.map((transaction, index) => (
          <li key={index} className="text-white mb-2">
            {transaction}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
