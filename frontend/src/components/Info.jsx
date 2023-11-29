
import React from 'react';

const Info = () => {
  return (
    <section className="info text-left py-30 bg-gray-100 rounded-md shadow-md p-4 m-2">
      <h1 className="text-4xl mb-8">O nas</h1>
      <h3 className="text-3xl mb-4">Umów się online</h3>
      <p className="text-lg mb-6">
        Chcesz umówić się do doradcy? Potrzebujesz pomocy w zakresach finansowych?
        <br />
        DoradcyOnline to darmowa aplikacja, dzięki której z łatwością znajdziesz termin dostosowany do twoich planów w ciągu dnia. Nie musisz dzwonić i martwić się o brak porozumienia - rezerwujesz o każdej porze dnia i nocy.
      </p>
      <h3 className="text-3xl mb-4">Plany się zmieniły?</h3>
      <p className="text-lg mb-6">
        Bez problemu możesz zarządzać swoimi wizytami, gdziekolwiek jesteś. Odwołaj rezerwację kilkoma kliknięciami.
      </p>
      <h3 className="text-3xl mb-4">Najlepsi specjaliści</h3>
      <p className="text-lg">
        Na DoradcyOnline znajdziesz najlepszych specjalistów dziedzinach doradctwa finansowego. Możesz się dowiedzieć o nich więcej dzięki opiniom innych klientów i zostawionych przez nich ocenom.
      </p>
    </section>
  );
}

export default Info;
