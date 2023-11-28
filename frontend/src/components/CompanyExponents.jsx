import React, { useState, useEffect } from 'react';
import CompanyInfo from './SingleCompany';
import axios from 'axios';
import img from '../assets/advisor1.png';

const CompanyExponets = () => {
  const [companies, setCompanies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/backend/companies')
        console.log(response.data)
        setCompanies(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    };

    fetchData()
  }, [])

  return (
    <div>
      {
        isLoading ? (
          <div className='h-20 bg-green-800 text-black items-center justify-center flex text-3xl'>
            Loading...
          </div>
        ) :
          (
            companies.map((company, index) => (
              <CompanyInfo
                key={index}
                companyName={company.name}
                imageUrl={img}
                price={company.price}
              />
            ))
          )
      }

    </div>
  );
};

export default CompanyExponets;
