
import React from 'react';
import VGIMG from '../../../assets/imgs/VGStoreWh.png';

export const NavbarAdmin = ({ toggleSidebar }) => {
    return (
        <>
            <div className="fixed top-0 z-50 w-full bg-[#723fffdc]">
                <div className="px-3 py-3 lg:px-5 lg:pl-3 pt-4 bg-[#723fffdc]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                onClick={toggleSidebar}
                                className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                            <img src={VGIMG} className="h-10 mr-3" alt="VGStore Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};