import React, { useState, useEffect } from 'react';

const CalendarPanelComponent = () => {
    const currentYear = 2023
    const currentMonth = 11
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        generateCalendar(currentYear, currentMonth);
    }, [currentYear, currentMonth]);

    const generateCalendar = (year, month) => {
        const calendarElement = document.getElementById('calendar');
        const currentMonthElement = document.getElementById('currentMonth');

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarElement.innerHTML = '';

        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        currentMonthElement.innerText = `${monthNames[month]} ${year}`;

        const firstDayOfWeek = firstDayOfMonth.getDay();

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach((day) => {
            const dayElement = document.createElement('div');
            dayElement.className = 'text-center font-semibold';
            dayElement.innerText = day;
            calendarElement.appendChild(dayElement);
        });

        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyDayElement = document.createElement('div');
            calendarElement.appendChild(emptyDayElement);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'text-center py-2 border cursor-pointer';
            dayElement.innerText = day;

            const currentDate = new Date();
            if (
                year === currentDate.getFullYear() &&
                month === currentDate.getMonth() &&
                day === currentDate.getDate()
            ) {
                dayElement.classList.add('bg-blue-500', 'text-white');
            }

            calendarElement.appendChild(dayElement);
        }

        const dayElements = document.querySelectorAll('.cursor-pointer');
        dayElements.forEach((dayElement) => {
            dayElement.addEventListener('click', () => {
                const day = parseInt(dayElement.innerText);
                const selectedDate = new Date(month, day);
                const options = { day: 'numeric' };
                const formattedDate = selectedDate.toLocaleDateString(undefined, options);
                // showModal(formattedDate);
                alert(formattedDate)
            });
        });
    };

    const showModal = (selectedDate) => {
        setSelectedDate(selectedDate);
    };

    const hideModal = () => {
        setSelectedDate(null);
    };

    return (
        <div className='flex flex-col'>
            <div className="flex items-center justify-center h-fit rounded-xl">
                <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
                            <h2 id="currentMonth" className="text-white mx-auto"></h2>
                        </div>
                        <div className="grid grid-cols-7 gap-2 p-4" id="calendar"></div>
                    </div>
                </div>
            </div>
            <button className='h-20 w-40 bg-green-700 rounded-md mx-auto hover:bg-green-800'>Reserve</button>
        </div>
    );
};

export default CalendarPanelComponent;
