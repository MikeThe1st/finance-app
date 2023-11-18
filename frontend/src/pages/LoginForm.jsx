import React from 'react'

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import LoginFormComponent from '../components/LoginFormComponent.jsx';

const LoginForm = () => {
    return (
        <div>
            <Navbar />
            <LoginFormComponent />
            <Footer />
        </div>
    )
}

export default LoginForm