import React from 'react'

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import RegisterFormComponent from '../components/RegisterFormComponent.jsx';

const AuthForm = () => {
  return (
    <div>
        <Navbar />
    <RegisterFormComponent/>
    <Footer />
    </div>
  )
}

export default AuthForm