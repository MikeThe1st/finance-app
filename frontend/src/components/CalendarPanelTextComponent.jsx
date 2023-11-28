import React from 'react';

const CalendarPanelTextComponent = () => {
  const chooseTermStyle = {
    position: 'absolute',
    width: '452px',
    height: '95px',
    left: '800px',
    top: '300px',
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '32px', 
    lineHeight: '38px',
    textAlign: 'center',
    color: '#ffffff', 
  };

  const freeTermsStyle = {
    position: 'absolute',
    width: '483px',
    height: '234px',
    left: '770px',
    top: '380px',
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: '24px', 
    lineHeight: '28px',
    textAlign: 'center',
    color: '#ffffff', 
  };

  return (
    <div>
      <div style={chooseTermStyle}>
        Wybierz dostępny termin
      </div>
      <div style={freeTermsStyle}>
        Wolne terminy dla „” są zaznaczone na zielono
      </div>
    </div>
  );
};

export default CalendarPanelTextComponent;
