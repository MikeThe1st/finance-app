
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const ServicesInfo = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Navbar />

      <section className="services text-center py-10 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-2xl sm:text-4xl mb-6 font-bold">Nasze usługi</h2>
        <ul className="space-y-6 p-4">
          <li className='flex flex-col justify-center items-center'>
            <h3 className="text-2xl mb-2 font-semibold">Doradztwo Inwestycyjne</h3>
            <p className='max-w-screen-lg text-xl'>
              Nasze profesjonalne doradztwo inwestycyjne oferuje kompleksowe wsparcie dla klientów, którzy pragną rozwijać swoje portfele inwestycyjne. Dzięki indywidualnemu podejściu i zaawansowanym narzędziom analitycznym, nasi eksperci pomagają w identyfikowaniu optymalnych możliwości inwestycyjnych, minimalizując jednocześnie ryzyko. Bezpieczeństwo finansowe naszych klientów to nasz priorytet.
            </p>
          </li>
          <li className='flex flex-col justify-center items-center'>
            <h3 className="text-2xl mb-2 font-semibold">Planowanie emerytalne</h3>
            <p className='max-w-screen-lg text-xl'>
              Zapewniamy spersonalizowane planowanie emerytalne, dostosowane do potrzeb biznesowych i indywidualnych klientów. Nasze usługi obejmują szczegółową analizę sytuacji finansowej, projektowanie elastycznych planów oszczędzania, oraz optymalne strategie inwestycyjne. Dążymy do zapewnienia pewnej przyszłości naszym klientom, umożliwiając im komfortowe i bezpieczne przejście w okres emerytalny.
            </p>
          </li>
          <li className='flex flex-col justify-center items-center'>
            <h3 className="text-2xl mb-2 font-semibold">Kredyty i Pożyczki</h3>
            <p className='max-w-screen-lg text-xl'>
              Oferujemy kompleksowe doradztwo w zakresie kredytów i pożyczek, dostosowane do potrzeb biznesowych i indywidualnych klientów. Nasze zespoły specjalistów pomagają w wyborze najkorzystniejszych opcji finansowania, negocjacji warunków umów, oraz zapewnieniu transparentności i klarowności procesu kredytowego. Dzięki nam, zdobycie środków finansowych staje się efektywnym i bezpiecznym procesem.
            </p>
          </li>
          <li className='flex flex-col justify-center items-center'>
            <h3 className="text-2xl mb-2 font-semibold">Podatki i Rozliczenia</h3>
            <p className='max-w-screen-lg text-xl'>
              Nasi doświadczeni doradcy podatkowi oferują kompleksowe usługi związane z podatkami i rozliczeniami. Znając zawiłości przepisów podatkowych, pomagamy naszym klientom zoptymalizować obciążenia podatkowe, minimalizując ryzyko błędów podczas rozliczeń. Dążymy do pełnej zgodności z przepisami prawa, jednocześnie maksymalizując korzyści podatkowe naszych klientów.
            </p>
          </li>
          <li className='flex flex-col justify-center items-center'>
            <h3 className="text-2xl mb-2 font-semibold">Analiza Portfela Inwestycyjnego</h3>
            <p className='max-w-screen-lg text-xl'>
              Nasza zaawansowana analiza portfela inwestycyjnego umożliwia klientom świadome zarządzanie ich aktywami. Dostarczamy szczegółowe raporty i rekomendacje, pomagając w zrozumieniu struktury portfela, ocenie ryzyka, oraz identyfikacji potencjalnych obszarów optymalizacji. Naszym celem jest maksymalizacja zwrotów inwestycyjnych przy zachowaniu zrównoważonego poziomu ryzyka.
            </p>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesInfo;
