import React, { useEffect, useState } from 'react';
import axios from 'axios'

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

const Company = ({ name, type }) => {
  const matchedType = types.find((el) => el.name === type)
  return (
    <div className="advisor h-full flex flex-col items-center mx-20 bg-green-800 p-6 rounded-lg m-2">
      <img src={matchedType.image} alt={`company ${name}`} className="mb-4 max-w-[7rem] max-h-[7rem]" />
      <h3 className="text-3xl mb-2">{name}</h3>
      <p className="mb-4">{type}</p>
      <button className="bg-gray-800 text-white px-8 py-2 rounded-md" onClick={() => window.location = `/company?name=${name}`}>Sprawdź firmę</button>
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
          <h2 className="text-3xl md:text-5xl mb-6 md:mb-12">Polecane firmy</h2>
          <div className="advisor-container flex flex-wrap justify-center">
            {companies.map((company) => {
              return <Company key={company.name} {...company} />
            })}
          </div>
        </section>
      )

  );
};

export default RecommendedCompanies;
