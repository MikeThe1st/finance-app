
import React from 'react';

const SingleCompany = ({ companyName, imageUrl, price, rating, type }) => {
  return (
    <div className="max-w-xl w-80 mx-auto bg-white rounded-xl overflow-hidden shadow-lg border-4 border-green-900 border-opacity-50">
      <div className="p-6 m-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{companyName}</h2>
        <div>{type}</div>
        <div className="flex items-center mt-2">
          <div className="text-yellow-500 mx-auto">
            <img src={imageUrl} alt={companyName} className="w-20 h-20 object-cover rounded-md" />
          </div>
        </div>
        <div className="flex items-center mt-2 justify-between">
          <span className="text-gray-600 ml-6">Ocena: {rating}/5</span>
          <span className="text-gray-600 mr-6">Koszt spotkania: {price}$</span>
        </div>
        <div className="mt-4">
          <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-900" onClick={() => window.location=`/company?name=${companyName}`}>
            Sprawdź firmę
          </button>
        </div>
      </div>
    </div>
  );
};


export default SingleCompany;