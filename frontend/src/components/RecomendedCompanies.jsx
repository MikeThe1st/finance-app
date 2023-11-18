import React from 'react';

import img1 from '../assets/advisor1.png';
import img2 from '../assets/advisor2.png';

const companies = [
  {
    name: 'Firma 1',
    description: 'Opis firmy nr.1',
    img: img1,
  },
  {
    name: 'Firma 2',
    description: 'Opis firmy nr.2',
    img: img2,
  },
  {
    name: 'Firma 3',
    description: 'Opis firmy nr.3',
    img: img1,
  },
];

const Company = ({ name, description, img }) => {
  return (
    <div className="advisor h-full flex flex-col items-center mx-20">
      <img src={img} alt={`company ${name}`} className="w-30 h-30 mb-4" />
      <h3 className="text-3xl mb-2">{name}</h3>
      <p className="mb-4">{description}</p>
      <button className="bg-gray-800 text-white px-8 py-2">Umów spotkanie</button>
    </div>
  );
};

const RecommendedCompanies = () => {
  return (
    <section className="text-center py-10 bg-green-900 text-white">
      <h2 className="text-5xl mb-12">Polecane firmy</h2>
      <div className="advisor-container flex flex-wrap justify-center">
        {companies.map((company) => (
          <Company key={company.name} {...company} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedCompanies;
