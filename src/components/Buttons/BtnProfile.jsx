import React, { useState, useEffect, useRef } from 'react';
import { isUserAuthentated } from '../../pages/Login/helper/auth';

export const BtnProfile = () => {
    const user = isUserAuthentated();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.clear();
        window.location.href = '/';
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none"
            >
                <div className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </div>
            </button>

            {isDropdownOpen && (
                <div className="origin-top-right absolute lg:-right-20 right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {user.authenticated ? (
                            <>
                                <h1 href=""
                                    className="font-customMed block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                    Bienvenido (poner nombre de usuario){user.name}
                                </h1>
                                <a
                                    href="/facturas"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Facturas
                                </a>
                                <a
                                    href="/pedidos-recientes"
                                    className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100 hover:text-gray-900"
                                >
                                    Pedidos Recientes
                                </a>
                                <hr />
                                <a
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                    <button onClick={() => logOut()}>Cerrar Sesión</button>
                                </a>
                            </>
                        ) : (
                            <a
                                href="/login"
                                className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100 hover:text-gray-900">
                                Iniciar Sesión
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};