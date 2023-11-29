import React from 'react';

const CircleWithMailComponent = ({ user }) => {

  const firstLetter = user.name.charAt(0).toUpperCase();

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-32 h-32 bg-green-900 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6">
        {firstLetter}
      </div>
      <div className='flex flex-row'>
      <p className="text-2xl text-white font-semibold mx-2">{user.name}</p>
      <p className="text-2xl text-white font-semibold">{user.surname}</p>
      </div>
     
      <p className="text-xl text-white font-semibold">{user.email}</p>
    </div>
  );
};

export default CircleWithMailComponent;
