import React, { useState, useEffect } from 'react';
import CompanyInfo from './SingleCompany';
import axios from 'axios';
import img from '../assets/advisor1.png';

const CompanyExponets = () => {
  const [companies, setCompanies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [needToFiltr, setNeedToFiltr] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/backend/companies')
        setCompanies(response.data)

        const urlParam = window.location.href.split('=')[1];
        if(urlParam) {
          setNeedToFiltr(true)
        }
        else {
          setCompanies(response.data)
        }
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    };

    fetchData()
  }, [])

  
  useEffect(() => {
    const urlParam = window.location.href.split('=')[1];
    if(urlParam) {
      const formattedParam = urlParam.split('-')[0]
      let newArray = []
      companies.forEach((company) => {
        const transformedString = company.type.toLowerCase().replace(/\s+/g, '-');
        const finalString = transformedString.split('-')[0]
        if (formattedParam == finalString) {
          newArray.push(company)
        }
        setCompanies(newArray)
        setNeedToFiltr(false)
      })
    }
  }, [needToFiltr])

  return (
    <div>
      {
        isLoading ? (
          <div className='h-20 bg-green-800 text-black items-center justify-center flex text-3xl'>
            Loading...
          </div>
        ) :
          (
            companies ? (
              <div className='bg-gray-800 flex flex-row flex-wrap gap-10 mt-20 mb-40 py-10'>
              {
                companies.map((company, index) => (
                  <CompanyInfo
                    key={index}
                    companyName={company.name}
                    imageUrl={img}
                    price={company.price}
                    rating={company.rating}
                    type={company.type}
                  />
                ))
              }
            </div>
            ) :
            (
              <div className='text-4xl text-white'>Loading...</div>
            )
           
          )
      }

    </div>
  );
};

export default CompanyExponets;
