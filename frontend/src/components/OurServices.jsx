
import React, { useEffect } from 'react';

const OurServices = () => {

  useEffect(() => {
    const selectedType = window.location.href.split('=')[1]
    const pickedService = document.getElementById(selectedType)
    pickedService?.classList.add('bg-green-700', 'p-2', 'rounded-lg')
  }, [])
  
  return (
    <section className="services text-center py-30 text-white">
      <h2 className="text-4xl mb-8 pt-6">Nasze usługi</h2>
      <ul className="list-none p-0 flex flex-row justify-center gap-10 flex-wrap">
        <li id='doradztwo-inwestycyjne' className="text-2xl mb-4"><a href="/companies?type=doradztwo-inwestycyjne">Doradztwo Inwestycyjne</a></li>
        <li id='planowanie-emerytalne' className="text-2xl mb-4"><a href="/companies?type=planowanie-emerytalne">Planowanie emerytalne</a></li>
        <li id='kredyty-i-pozyczki' className="text-2xl mb-4"><a href="/companies?type=kredyty-i-pozyczki">Kredyty i Pożyczki</a></li>
        <li id='podatki-i-rozliczenia' className="text-2xl mb-4"><a href="/companies?type=podatki-i-rozliczenia">Podatki i rozliczenia</a></li>
        <li id='analiza-portfela-inwestycyjnego' className="text-2xl mb-4"><a href="/companies?type=analiza-portfela-inwestycyjnego">Analiza portfela inwestycyjnego</a></li>
      </ul>
    </section>
  );
}

export default OurServices;
