import React from 'react';

const CircleWithMailComponent = ({ userEmail }) => {
  const containerStyle = {
    position: 'absolute',
    width: '200px',
    height: '260px',
    left: ' 950px',
    top: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const circleStyle = {
    width: '200px',
    height: '200px',
    background: '#D9D9D9',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textStyle = {
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',  // Ustawienie absolutne, aby można było ręcznie dostosować pozycję
    top: '200px',  // Ręczne dostosowanie wartości top
    left: '50%',   // Ręczne dostosowanie wartości left
    transform: 'translateX(-50%)',  // Przesunięcie o połowę szerokości elementu w lewo
  };

  return (
    <div style={containerStyle}>
      <div style={circleStyle}>
        <div style={{ margin: 0 }}>
          <p style={textStyle}>{userEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default CircleWithMailComponent;
