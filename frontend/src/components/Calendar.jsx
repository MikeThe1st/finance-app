import React, { useState, useEffect } from 'react';
import axios from 'axios'

const CalendarPanelComponent = ({ dates, companyName }) => {
    const [selectedDate, setSelectedDate] = useState(undefined);
    useEffect(() => {
        generateCalendar(2023, 11);
    }, []);

    useEffect(() => {
        highlightDate()
    }, [selectedDate])

    const highlightDate = () => {
        const dayElements = document.querySelectorAll('[id^="day"]');
        dayElements.forEach((dayElement, index) => {
            const iterationDate = document.getElementById(`day ${index + 1}`);
            if (dates[index]) {
                iterationDate.classList.add('bg-green-700');
            } else {
                iterationDate.classList.add('bg-red-700');
            }
        });

        const pickedDate = document.getElementById(`day ${selectedDate}`);
        if (pickedDate) {
            pickedDate.classList.remove('bg-green-700', 'bg-red-700');
            pickedDate.classList.add('bg-blue-700');
        }
    }

    const generateCalendar = (year, month) => {
        const calendarElement = document.getElementById('calendar');

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarElement.innerHTML = '';

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
            dayElement.id = `day ${day}`
            dayElement.className = `text-center py-2 border cursor-pointer`

            dayElement.innerText = day;
            calendarElement.appendChild(dayElement);
        }

        const dayElements = document.querySelectorAll('.cursor-pointer');
        dayElements.forEach((dayElement, index) => {
            dayElement.addEventListener('click', () => {
                if (dates[index]) {
                    const day = parseInt(dayElement.innerText);
                    setSelectedDate(day)
                }
                else {
                    alert('Date not available.')
                }
            });
            dayElement.classList.add(dates[index] ? 'bg-green-700' : 'bg-red-700');
        }
        )
    };

    const postReservation = async () => {
        const postData = { date: selectedDate, name: companyName }
        const {data} = await axios.post('http://localhost:3000/backend/user/new-transaction', postData, {withCredentials: true})
        console.log(data)
    }


    return (
        <div className='flex flex-col'>
            <div className="flex items-center justify-center h-fit rounded-xl">
                <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
                            <h2 id="monthAndYear" className="text-white mx-auto">December 2023</h2>
                        </div>
                        <div className="grid grid-cols-7 gap-2 p-4" id="calendar"></div>
                    </div>
                </div>
            </div>
            <button className='h-20 w-40 bg-green-700 rounded-md mx-auto hover:bg-green-800' onClick={() => postReservation()}>Rezerwuj</button>
        </div>
    );
};

export default CalendarPanelComponent;
