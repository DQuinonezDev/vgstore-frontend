import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const UserSideNav = () => {
    const [isSubOpen, setIsSubOpen] = useState(false);

    const toggleUsuariosDropdown = () => {
        setIsSubOpen(!isSubOpen);
    };

    return (
        <>
            <ul>
                <li>
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-[#6329FF]  group" onClick={toggleUsuariosDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`"h-6 w-6 transition-transform transform ${isSubOpen ? 'rotate-90' : 'rotate-0'}`} viewBox="0 0 24 24" fill="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>

                    {isSubOpen && (
                        <ul className="ml-6 space-y-0">
                            <li>
                                <Link to={"/userView"} className="flex items-center p-2 text-white rounded-lg  hover:bg-[#6329FF] group">
                                    <span className="flex-1 ml-3 whitespace-nowrap">Ver todos los usuarios</span>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-white rounded-lg  hover:bg-[#6329FF] group">
                                    <span className="flex-1 ml-3 whitespace-nowrap">Agregar usuario</span>
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </>
    )
}
