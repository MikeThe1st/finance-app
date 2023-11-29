import React, { useEffect, useState } from 'react';
import axios from 'axios'

import img1 from '../assets/advisor1.png';
import img2 from '../assets/advisor2.png';

const Company = ({ name, type}) => {

  return (
    <div className="advisor h-full flex flex-col items-center mx-20 bg-green-800 p-6 rounded-lg">
      <img src={img1} alt={`company ${name}`} className="w-30 h-30 mb-4" />
      <h3 className="text-3xl mb-2">{name}</h3>
      <p className="mb-4">{type}</p>
      <button className="bg-gray-800 text-white px-8 py-2 rounded-md" onClick={() => window.location=`/company?name=${name}`}>Sprawdź firmę</button>
    </div>
  );
};

const RecommendedCompanies = () => {
  const [companies, setCompanies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getRecomendedComapnies = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/backend/companies/recommended`)
        console.log(response)
        setCompanies(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
  
    getRecomendedComapnies()
  }, [])

  return (
    isLoading ? (
      <div>Loading...</div>
    ) :
    (
<section className="text-center py-10 bg-green-900 text-white">
      <h2 className="text-5xl mb-12">Polecane firmy</h2>
      <div className="advisor-container flex flex-wrap justify-center">
        {companies.map((company) => (
          <Company key={company.name} {...company} />
        ))}
      </div>
    </section>
    )
    
  );
};

export default RecommendedCompanies;
