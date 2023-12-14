import React, { useState, useEffect } from 'react';
import axios from 'axios'

const possibleHours = ['08:00', '11:00', '14:30', '16:00']

const CalendarPanelComponent = ({ dates, companyName }) => {
    const [selectedDate, setSelectedDate] = useState(undefined)
    const [selectedHour, setSelectedHour] = useState(undefined)

    useEffect(() => {
        generateCalendar(2023, 11);
    }, []);

    useEffect(() => {
        highlightDate()
        setSelectedHour(undefined)
        const pickedDate = document.getElementById(`day ${selectedDate}`);
        if (pickedDate) {
            pickedDate.classList.remove('bg-green-700', 'bg-red-700');
            pickedDate.classList.add('bg-blue-700');
        }
    }, [selectedDate])


    const highlightDate = () => {
        const dayElements = document.querySelectorAll('[id^="day"]');

        dayElements.forEach((dayElement, index) => {
            let reserved = true;

            dates[index].map((singleDate) => {
                if (singleDate) reserved = false
            })

            if (!reserved) {
                dayElement.classList.add('bg-green-700');
                dayElement.classList.add('reserved');
            } else {
                dayElement.classList.add('bg-red-700');
            }
        });
    };


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
            let reserved = true
            dates[index].map((singleDate) => {
                if (singleDate) reserved = false
            })
            dayElement.addEventListener('click', () => {
                if (!reserved) {
                    const day = parseInt(dayElement.innerText);
                    setSelectedDate(day)
                }
                else {
                    alert('Date not available.')
                }
            });
        }
        )
    };

    const postReservation = async () => {
        if (selectedDate && selectedHour || selectedHour == 0) {
            const postData = { date: selectedDate, hour: selectedHour, name: companyName }
            const { data } = await axios.post('http://localhost:3000/backend/user/new-transaction', postData, { withCredentials: true })
            if (data) {
                alert('Wizyta zarezerwowana, aby zarezerwować wizytę.')
                window.location.href = '/user'
            }
        }
        else alert('Wybierz datę i godzinę!')
    }


    return (
        <div className='flex flex-col'>
            <div className='text-white mx-auto pb-4'>
                {
                    selectedDate ? <DropdownComponent dates={dates} selectedDate={selectedDate} setSelectedHour={setSelectedHour} /> : <></>
                }
                {
                    typeof selectedHour === "number" ? 
                    <div>
                        <div className='text-2xl text-white font-semibold mt-4 p-2'>{`Wybrana godzina: ${possibleHours[selectedHour]}.`}</div>
                    </div> :
                    <></>
                }
            </div>
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
            <button className={`h-20 w-40  rounded-md mx-auto ${selectedDate && (selectedHour || selectedHour == 0) ? 'bg-green-700 hover:bg-green-800' : 'bg-red-700 opacity-70 cursor-not-allowed'}`} onClick={() => postReservation()}>Rezerwuj</button>
        </div>
    );
};

const DropdownElement = ({ number, setHour, setDropdown }) => {
    return (
        <li>
            <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600 hover:cursor-pointer"
                onClick={() => {
                    setHour(number) 
                    setDropdown(false)
                }}
            >
                {possibleHours[number]}
            </a>
        </li>
    )
}

const DropdownComponent = ({ dates, selectedDate, setSelectedHour }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false)

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    }

    return (
        <div className="relative" data-te-dropdown-ref>
            <a
                className="bg-green-600 flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadows-xl shadow-[0_4px_9px_-4px_#1b872a] transition duration-150 ease-in-out hover:bg-primary-600 "
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                onClick={toggleDropdown}
                data-te-ripple-init
                data-te-ripple-color="light"
            >
                Wybierz godzinę spotkania
                <span className="ml-2 w-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </a>
            <ul
                className={`absolute w-full text-center m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg dark:bg-neutral-700 ${isDropdownVisible ? 'block' : 'hidden'}`}
            >
                {
                    dates[selectedDate - 1].map((oneHour, index) => {
                        if (oneHour == true) return <DropdownElement key={index} number={index} setHour={setSelectedHour} setDropdown={setDropdownVisible}/>
                        else return null
                    })
                }
            </ul>
        </div>
    )
}

export default CalendarPanelComponent;
