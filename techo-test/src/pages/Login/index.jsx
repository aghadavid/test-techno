import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/features/auth/authSlice.js';
import logo from '@/assets/Assets/logo technopartner.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, token } = useSelector(state => state.auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({ email, password }));
    };


    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center px-[2rem]">
            <div className="w-full h-[50%] flex flex-col gap-[1rem]">
                <div className="w-full h-[7rem]">
                    <img src={logo} alt="Logo" className="object-contain w-full h-full" />
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="email" className="text-center text-[#4444] mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow-sm rounded-md h-8"
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label htmlFor="password" className="text-center text-[#4444] mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow-sm rounded-md h-8"
                        />
                    </div>
                    <button
                        type="submit"
                        className="border-[05.px] shadow-md px-[2rem] py-2 rounded-md cursor-pointer font-bold"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
