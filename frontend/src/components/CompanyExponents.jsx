import React, { useState, useEffect } from 'react';
import CompanyInfo from './SingleCompany';
import axios from 'axios';
import pig from '../assets/pig.png';
import chart from '../assets/chart.png';
import wallet from '../assets/wallet.png';
import head from '../assets/head.webp';
import bank from '../assets/bank.webp';

const CompanyExponets = () => {
  const [companies, setCompanies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [needToFiltr, setNeedToFiltr] = useState(false)

  const types = [
    { name: 'Doradztwo Inwestycyjne', image: chart },
    { name: 'Planowanie emerytalne', image: head },
    { name: 'Kredyty i Pożyczki', image: bank },
    { name: 'Podatki i rozliczenia', image: pig },
    { name: 'Analiza portfela inwestycyjnego', image: wallet }
  ]

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
                companies.map((company, index) => {
                  const matchedType = types.find((type) => type.name === company.type)
                
                  return (
                    <CompanyInfo
                      key={index}
                      companyName={company.name}
                      imageUrl={matchedType ? matchedType.image : ''}
                      price={company.price}
                      rating={company.rating}
                      type={company.type}
                    />
                  )
                })
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
