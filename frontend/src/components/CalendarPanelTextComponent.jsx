import React from 'react';

const CalendarPanelTextComponent = () => {

  return (
    <div className='flex flex-col w-1/5 items-center mx-auto my-16'>
      <div className='bg-[#BD9191] text-3xl font-semibold m-6 p-4'>
        Wybierz dostępny termin
      </div>
      <div className='bg-[#BD9191] text-2xl font-semibold m-4 p-2'>
        Wolne terminy są zaznaczone na <span className='text-green-700 font-bold'>zielono</span>.
      </div>
    </div>
  );
};

export default CalendarPanelTextComponent;
