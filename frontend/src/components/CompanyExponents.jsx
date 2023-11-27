
import React from 'react';
import CompanyInfo from './SingleCompany';

const CompanyExponets = () => {
  const companies = [
    {
      companyName: 'Biuro Progressive',
      imageUrl: 'url_do_zdjecia_1',
      price: '$100',
    },
    {
      companyName: 'Better Call Saul',
      imageUrl: 'url_do_zdjecia_2',
      price: '$120',
    },
    {
      companyName: 'Company C',
      imageUrl: 'url_do_zdjecia_3',
      price: '$90',
    },
    {
      companyName: 'Company D',
      imageUrl: 'url_do_zdjecia_4',
      price: '$110',
    },
  ];

  return (
    <div>
      {companies.map((company, index) => (
        <CompanyInfo
          key={index}
          companyName={company.companyName}
          imageUrl={company.imageUrl}
          price={company.price}
        />
      ))}
    </div>
  );
};

export default CompanyExponets;