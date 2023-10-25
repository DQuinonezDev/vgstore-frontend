import React, { useState } from 'react';
import VGStoreLogo from "../../assets/imgs/VGStoreWh.png";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav aria-label="Site Navbar">
            <div className="border-b bg-[#733FFF]" >
                <div className="mx-auto max-w-screen-xl px-6 py-4 md:py-6">
                    <div className="flex items-center justify-between gap-x-4" > 
                        
                        <a className="flex cursor-pointer items-center gap-x-1">
                            <img
                                width="175"
                                className="object-cover transition-transform transform scale-100 hover:scale-90"
                                src={VGStoreLogo}
                                alt="logo"
                            />
                        </a>

                        <ul className="flex items-center gap-x-3">
                            {/* Iconos */}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="mx-auto max-w-screen-xl px-4 py-4 md:py-6">
                    <div className="flex items-center justify-between gap-x-8">

                        <ul className="flex items-center gap-x-6 text-white">
                            <li className="hidden md:block">
                                <a className="cursor-pointer text-sm font-medium hover:text-gray-900/70 transition-transform transform scale-100 hover:scale-95">Productos</a>
                            </li>
                            <li className="hidden md:block">
                                <a className="cursor-pointer text-sm font-medium hover:text-gray-900/70 transition-transform transform scale-100 hover:scale-95">Categorías</a>
                            </li>
                            <li className="hidden md:block">
                                <a className="cursor-pointer text-sm font-medium hover:text-gray-900/70 transition-transform transform scale-100 hover:scale-95">Ofertas</a>
                            </li>
                            <li className="hidden md:block">
                                <a className="cursor-pointer text-sm font-medium hover:text-gray-900/70 transition-transform transform scale-100 hover:scale-95">Últimas</a>
                            </li>
                            <li className="flex items-center gap-x-4 md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="block cursor-pointer p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70"
                                >
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`duration-900 overflow-y-hidden transition-all md:hidden ${isMenuOpen ? 'h-auto' : 'h-0'}`}>
                    <hr />
                    <ul className="mx-auto max-w-screen-xl px-4 py-4 text-white font-customMed">
                        <li>
                            <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-[#946CFF] hover:text-gray-50 transition-transform transform scale-100 hover:scale-95">HOME</a>
                        </li>
                        <li>
                            <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-[#946CFF] hover:text-gray-50 transition-transform transform scale-100 hover:scale-95">PRODUCTS</a>
                        </li>
                        <li>
                            <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-[#946CFF] hover:text-gray-50 transition-transform transform scale-100 hover:scale-95">SERVICE</a>
                        </li>
                        <li>
                            <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-[#946CFF] hover:text-gray-50 transition-transform transform scale-100 hover:scale-95">CONTACTS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
