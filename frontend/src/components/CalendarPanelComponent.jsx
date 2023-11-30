import React from 'react';

const CalendarPanelComponent = ({name, price}) => {

  return (
    <div className='flex flex-col h-fit p-8 w-3/4 bg-[#BD9191] text-4xl font-semibold mx-auto items-center justify-center gap-6'>
      <div>
        {`Rezerwacja spotkania w ${name}`}
      </div>
      <div>
        Cena za spotkanie: {price}$
      </div>
    </div>
  );
};

export default CalendarPanelComponent;
