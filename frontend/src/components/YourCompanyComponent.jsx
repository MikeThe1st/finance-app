import React from 'react';
import companyImage from '../assets/advisor1.png';  

const YourCompanyComponent = () => {
  const opisFirmy = `.
opis opis opis opis opis opis opis opis opis opis opis opis
opis opis opis opis opis opis opis opis opis opis opis opis
opis opis opis opis opis opis opis opis opis opis opis opis
opis opis opis opis opis opis opis opis opis opis opis opis
opis opis opis opis opis opis opis opis opis opis opis opis
opis opis opis opis opis opis opis opis opis opis opis opis
opis opis opis opis opis opis opis opis opis opis opis opis
opis opis opis opis opis opis opis opis opis opis opis opis `;

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      
      <img
        src={companyImage}
        alt="Zdjęcie Firmy"
        style={{
          width: '15%', 
        }}
      />

      
      <p style={{ marginTop: '20px', fontSize: '18px', color: '#fff', whiteSpace: 'pre-line' }}>
        {opisFirmy}
      </p>

     
      <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#3498db', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
        Przejdź do kalendarza
      </button>
    </div>
  );
};

export default YourCompanyComponent;
