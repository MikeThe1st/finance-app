import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white text-center py-6">
        <div className="mb-2">
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleNav}
          >
            {isNavOpen ? 'Close' : 'Menu'}
          </button>
          <nav
            className={`${
              isNavOpen ? 'block' : 'hidden'
            } lg:flex lg:flex-row lg:justify-center`}
          >
            <ul className="flex flex-col lg:flex-row lg:justify-center gap-16">
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="/">Strona główna</a>
              </li>
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="#">Znajdź Usługę</a>
              </li>
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="/services-info">Usługi</a>
              </li>
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="/contact">Kontakt</a>
              </li>
              <li className="hover:text-green-900 font-bold text-2xl bg-green-700 px-2 rounded-lg">
                <a href="/login">Logowanie</a>
              </li>
              <li className="hover:text-green-900 font-bold text-2xl bg-green-700 px-2 rounded-lg">
                <a href="/register">Rejestracja</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
