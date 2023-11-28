import React, { useEffect, useState } from 'react';
import companyImage from '../assets/advisor1.png';
import axios from 'axios';

const YourCompanyComponent = () => {
  const url = 'http://localhost:5173/company-form?company=testCompany';
  const companyName = url.slice(url.indexOf('=') + 1);

  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/backend/company?name=${companyName}`)
        setCompany(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    };

    fetchData();
  }, [companyName]);


  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex flex-col items-center text-white'>
          <div className='text-4xl mb-6'>{company.name}</div>
          <div className='text-2xl mb-4 flex-flex-row'>Rating: <span className='text-green-700 font-bold'>{`${company.rating}/5`}</span></div>
          <img
            src={companyImage}
            alt="Zdjęcie Firmy"
            style={{
              width: '90%',
              height: '90%',
            }}
          />

          <p style={{ marginTop: '20px', fontSize: '18px', color: '#fff', whiteSpace: 'pre-line' }} className='max-w-xl m-2'>
            {company.description}
          </p>

          <button style={{ marginTop: '20px', marginBottom: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#3498db', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
            Przejdź do kalendarza
          </button>
        </div>
      )}
    </div>
  );
};

export default YourCompanyComponent;
