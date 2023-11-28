import React from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import CalendarPanelComponent from '../components/CalendarPanelComponent.jsx';
import CalendarPanelTextComponent from '../components/CalendarPanelTextComponent.jsx';

const CalendarForm = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            
            <div style={{ position: 'relative', top: '-245px', left: '50px' }}>
              <CalendarPanelComponent />
            </div>
            
            <div style={{ flex: '1' }}></div> {/* Elastyczny element, aby przesunąć stopkę na dół */}
            
            <CalendarPanelTextComponent />



            <Footer />
        </div>
    );
};

export default CalendarForm;
