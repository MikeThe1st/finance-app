
import React from 'react';

const Info = () => {
  return (
    <section className="info text-left py-30 bg-gray-100 rounded-md shadow-md p-4 m-2">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8">O nas</h1>
      <h3 className="text-x1 md:text-2x1 lg:text-3x1 mb-2 md:mb-4 lg:mb-6">Umów się online</h3>
      <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb">
        Chcesz umówić się do doradcy? Potrzebujesz pomocy w zakresach finansowych?
        <br />
        DoradcyOnline to darmowa aplikacja, dzięki której z łatwością znajdziesz termin dostosowany do twoich planów w ciągu dnia. Nie musisz dzwonić i martwić się o brak porozumienia - rezerwujesz o każdej porze dnia i nocy.
      </p>
      <h3 className="text-x1 md:text-2x1 1g:text-3x1 mb-2 md:mb-4 lg:mb-6">Plany się zmieniły?</h3>
      <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
        Bez problemu możesz zarządzać swoimi wizytami, gdziekolwiek jesteś. Odwołaj rezerwację kilkoma kliknięciami.
      </p>
      <h3 className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4 lg:mb-6">Najlepsi specjaliści</h3>
      <p className="text-sm md:text-base lg:text-lg">
        Na DoradcyOnline znajdziesz najlepszych specjalistów dziedzinach doradctwa finansowego. Możesz się dowiedzieć o nich więcej dzięki opiniom innych klientów i zostawionych przez nich ocenom.
      </p>
    </section>
  );
}

export default Info;
