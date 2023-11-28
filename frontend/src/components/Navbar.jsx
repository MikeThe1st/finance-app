import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const getCookie = (name) => {
      const cookieArray = document.cookie.split(';')
      for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim()
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1)
        }
      }
      return null;
    }

    const myCookieValue = getCookie('token')

    if (myCookieValue) {
      setIsLogged(true)
    } else {
      console.log('Cookie not found')
    }
  }, [isLogged])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const logout = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 2023 00:00:00 GMT; path=/`
    setIsLogged(false)
  }

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
            className={`${isNavOpen ? 'block' : 'hidden'
              } lg:flex lg:flex-row lg:justify-center`}
          >
            <ul className="flex flex-col lg:flex-row lg:justify-center gap-16">
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="/">Strona główna</a>
              </li>
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="/company-list">Znajdź Usługę</a>
              </li>
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="/services-info">Usługi</a>
              </li>
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="/contact">Kontakt</a>
              </li>
              {
                isLogged ? (
                  <div>
                    <button className='text-2xl font-bold text-red-800' onClick={() => logout('token')}>
                      Logout
                    </button>
                  </div>
                ) :
                  (
                    <div className='flex flex-col lg:flex-row lg:justify-center gap-16'>
                      <li className="hover:text-green-900 font-bold text-2xl bg-green-700 px-2 rounded-lg">
                        <a href="/login">Logowanie</a>
                      </li>
                      <li className="hover:text-green-900 font-bold text-2xl bg-green-700 px-2 rounded-lg">
                        <a href="/register">Rejestracja</a>
                      </li>
                    </div>
                  )
              }

            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
