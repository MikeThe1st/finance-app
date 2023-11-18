
import React from 'react';

const SearchBar = () => {
  return (
    <section className="search-bar text-center py-20 bg-blue-200">
      <h2 className="text-2xl">Znajdź doradcę finansowego</h2>
      <form>
        <input type="text" placeholder="Lokalizacja" className="px-4 py-2 border-2 border-gray-300" />
        <input type="text" placeholder="Usługa" className="px-4 py-2 border-2 border-gray-300" />
        <button className="bg-gray-800 text-white px-8 py-2">Szukaj</button>
      </form>
    </section>
  );
}

export default SearchBar;
