import React from 'react'

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const Contact = () => {
  return (
    <div>
        <Navbar />
    <section id="contact" className="bg-gray-100 p-8 my-4 rounded-md shadow-md">
      <h2 className="text-3xl border-b-2 border-gray-300 pb-2 text-gray-700">Dane kontaktowe</h2>
      <p className="text-gray-700">Masz pytania lub potrzebujesz pomocy? Skontaktuj się z nami:</p>
      <p className="text-gray-700">Telefon: 123-456-789</p>
      <p className="text-gray-700">Email: kontakt@doradcaonline.pl</p>
    </section>
    <Footer />
    </div>
  )
}

export default Contact