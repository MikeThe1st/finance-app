import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import CalendarPanelComponent from '../components/CalendarPanelComponent.jsx';
import CalendarPanelTextComponent from '../components/CalendarPanelTextComponent.jsx';
import Calendar from '../components/Calendar.jsx';

import axios from 'axios'

const CalendarForm = () => {

    const [company, setCompany] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getCompany = async () => {
            try {
                const response = await axios.get('http://localhost:3000/backend/company?name=testCompany')
                setCompany(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getCompany()
    }, [])

    return (
        isLoading ? (
            <div className='text-white'>Loading...</div>
        ) : (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <CalendarPanelComponent name={company.name} price={company.price} />
                <CalendarPanelTextComponent />
                <Calendar dates={company.dates} companyName={company.name} />
                <div style={{ flex: '1' }}></div>
                <Footer />
            </div>
        )

    );
};

export default CalendarForm;
