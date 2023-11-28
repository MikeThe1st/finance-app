import React from 'react';

const CalendarPanelComponent = () => {
    const panelStyle = {
        position: 'absolute',
        width: '1920px',
        height: '177px',
        left: '0px',
        top: '248px',
        background: '#BD9191',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000', 
        fontSize: '36px', 
  };

  return (
    <div style={panelStyle}>
      Panel Kalendarz
    </div>
  );
};

export default CalendarPanelComponent;
