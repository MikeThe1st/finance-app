import React, { useEffect, useState } from 'react';
import axios from 'axios';

import pig from '../assets/pig.png';
import chart from '../assets/chart.png';
import wallet from '../assets/wallet.png';
import head from '../assets/head.webp';
import bank from '../assets/bank.webp';

const types = [
  { name: 'Doradztwo Inwestycyjne', image: chart },
  { name: 'Planowanie emerytalne', image: head },
  { name: 'Kredyty i Pożyczki', image: bank },
  { name: 'Podatki i rozliczenia', image: pig },
  { name: 'Analiza portfela inwestycyjnego', image: wallet }
]

const YourCompanyComponent = () => {
  const url = window.location.href
  const companyName = url.slice(url.indexOf('=') + 1);

  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [companyImg, setCompanyImg] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/backend/company?name=${companyName}`)
        setCompany(response.data)
        setIsLoading(false)
        const { image } = types.find((type) => type.name === response.data.type)
        setCompanyImg(image)
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
        <div className='flex flex-col items-center text-white gap-10'>
          <div className='mt-8 sm:mt-0'>
            <div className='text-4xl mb-6'>{company?.name}</div>
            <div className='text-2xl mb-12 flex-row'>Rating: <span className='text-green-700 font-bold'>{`${company?.rating}/5`}</span></div>
          </div>
          <img
            src={companyImg || ''}
            alt="Zdjęcie Firmy"
            style={{
              width: '20rem',
              height: '20rem',
            }}
          />

          <p style={{ marginTop: '20px', fontSize: '18px', color: '#fff', whiteSpace: 'pre-line' }} className='max-w-xl m-2'>
            {company?.description}
          </p>

          <button style={{ marginTop: '20px', marginBottom: '20px', padding: '10px 20px', fontSize: '16px', color: '#fff', borderRadius: '5px', cursor: 'pointer' }} onClick={() => window.location = `/reserve-visit?name=${companyName}`} className='bg-green-700'>
            Umów wizytę
          </button>
        </div>
      )}
    </div>
  );
};

export default YourCompanyComponent;
