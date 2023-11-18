import React, { useState } from 'react';


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration data:', formData);

        setFormData({
            email: '',
            password: '',
            repeatPassword: '',
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className='max-w-screen-sm flex flex-col justify-center mx-auto p-10 bg-gray-600 rounded-lg my-20'>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                        placeholder='email'
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">
                        Hasło
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                        placeholder='haslo'
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="repeatPassword" className="block text-gray-300 text-sm font-bold mb-2">
                        Powtórz hasło
                    </label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                        placeholder='haslo'
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                >
                    Zarejestruj się
                </button>
            </form>
        </div>
    )
}

export default RegisterForm