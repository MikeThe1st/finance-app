
import React from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import advisorImage from '../assets/advisor1.png'; 

const CompanyForm = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Navbar />
      {}
      <div style={{ position: 'absolute', top: '60px', left: 0, right: 0, bottom: '300px', overflow: 'hidden', textAlign: 'center' }}>
        <img
          src={advisorImage}
          alt="Zdjęcie Firmy"
          style={{
            width: '25%', 
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            minHeight: '50%',
          }}
        />
      </div>
      {}
      <div style={{ position: 'absolute', top: 'calc(100vh - 300px)', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '80%', margin: 'auto' }}>
        <p>
          siema siema  .
        </p>
      </div>
      {}
      <div style={{ position: 'absolute', bottom: '100px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#3498db', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
          Przejdź do kalendarza
        </button>
      </div>
     

      <Footer/>
    </div>
  )
}

export default CompanyForm;
