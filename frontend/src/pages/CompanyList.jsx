import React from 'react'
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import OurServices from '../components/OurServices.jsx';
import CompanyExponets from '../components/CompanyExponents.jsx';

const CompanyList = () => {
    return (
        <div>
            <Navbar />
            <OurServices />
            <CompanyExponets />
            <Footer />
        </div>
    )
}

export default CompanyList