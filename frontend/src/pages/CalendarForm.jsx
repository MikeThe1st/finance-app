import React from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import CalendarPanelComponent from '../components/CalendarPanelComponent.jsx';
import CalendarPanelTextComponent from '../components/CalendarPanelTextComponent.jsx';
import Calendar from '../components/Calendar.jsx';

const CalendarForm = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <CalendarPanelComponent />
            <CalendarPanelTextComponent />
            <Calendar />
            <div style={{ flex: '1' }}></div>
            <Footer />
        </div>
    );
};

export default CalendarForm;
