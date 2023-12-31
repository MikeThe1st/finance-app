import React, { useState, useEffect } from 'react';
import { getCookie } from '../utils/cookie';
import axios from 'axios';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('http://localhost:3000/backend/user', {withCredentials: true})
      setUser(response.data[0])
    }

    const myCookie = getCookie('token')
    if (myCookie) {
      setIsLogged(true)
    } else {
      console.log('Cookie not found')
    }

    getUser()
  }, [isLogged])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const logout = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 2023 00:00:00 GMT; path=/`
    setIsLogged(false)
    window.location.href = '/login'
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
                <a href="/companies">Znajdź Usługę</a>
              </li>
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="/services-info">Usługi</a>
              </li>
              <li className="hover:text-green-600 font-bold text-2xl">
                <a href="/contact">Kontakt</a>
              </li>
              {
                isLogged ? (
                  <div className='flex flex-col lg:flex-row gap-20'>
                    <button className='text-2xl font-bold text-yellow-600' onClick={() => window.location ='/user'}>{user?.email}</button>
                    <button className='text-2xl font-bold text-red-800' onClick={() => {
                      if(confirm('Czy na pewno chcesz się wylogować?') == true) {
                        logout('token')
                      }
                    }}>
                      Wyloguj
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
