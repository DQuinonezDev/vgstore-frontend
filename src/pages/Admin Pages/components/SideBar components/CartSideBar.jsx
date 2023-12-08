import React, { useState } from 'react'

export const CartSideBar = () => {
    const [isSubOpen, setIsSubOpen] = useState(false);

    const toggleUsuariosDropdown = () => {
        setIsSubOpen(!isSubOpen);
    };

    return (
        <>
            <ul>
                <li>
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-[#6329FF]  group" onClick={toggleUsuariosDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Carritos de compra</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`"h-6 w-6 transition-transform transform ${isSubOpen ? 'rotate-90' : 'rotate-0'}`} viewBox="0 0 24 24" fill="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>

                    {isSubOpen && (
                        <ul className="ml-6 space-y-0">
                            <li>
                                <a href="#" className="flex items-center p-2 text-white rounded-lg  hover:bg-[#6329FF] group">
                                    <span className="flex-1 ml-3 whitespace-nowrap">Ver todos los carritos</span>
                                </a>
                            </li>

                        </ul>
                    )}
                </li>
            </ul>
        </>
    )
}

