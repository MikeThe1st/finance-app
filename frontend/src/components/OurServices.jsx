
import React from 'react';

const OurServices = () => {
  return (
    <section className="services text-center py-30 text-white">
      <h2 className="text-4xl mb-8 pt-6">Nasze usługi</h2>
      <ul className="list-none p-0 flex flex-row justify-center gap-10 flex-wrap">
        <li className="text-2xl mb-4"><a href="Doradztwo_Inwestycyjne.html">Doradztwo Inwestycyjne</a></li>
        <li className="text-2xl mb-4"><a href="Planowanie_emerytalne.html">Planowanie emerytalne</a></li>
        <li className="text-2xl mb-4"><a href="Kredyty_i_pozyczki.html">Kredyty i Pożyczki</a></li>
        <li className="text-2xl mb-4"><a href="Podatki_i_rozliczenia.html">Podatki i rozliczenia</a></li>
        <li className="text-2xl mb-4"><a href="Analiza_portfela_inwestycyjnego.html">Analiza portfela inwestycyjnego</a></li>
      </ul>
    </section>
  );
}

export default OurServices;
