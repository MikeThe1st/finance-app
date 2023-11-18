import React from 'react';

import SearchBar from '../components/SearchBar.jsx';
import OurServices from '../components/OurServices.jsx';
import RecomendedCompanies from '../components/RecomendedCompanies.jsx';
import Info from '../components/Info.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

function App() {
  return (
    <div className="font-Arial sans-serif">
        <Navbar/>
      {/* <SearchBar /> */}
      <OurServices />
      <RecomendedCompanies />
      <Info />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
