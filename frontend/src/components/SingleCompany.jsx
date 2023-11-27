
import React from 'react';

const SingleCompany = ({ companyName, imageUrl, price }) => {
    return (

        <div className="flex items-center justify-center bg-gray-200 p-4 rounded-md shadow-md">
          <div className="border-2 border-gray-300 p-2 rounded-md">
            <img src={imageUrl} alt={companyName} className="w-20 h-20 object-cover rounded-md" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">{companyName}</h2>
            <p className="text-gray-700">Price: {price}</p>
          </div>
        </div>
    );
  };
  
  
  export default SingleCompany;