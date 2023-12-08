import React, { useEffect, useRef, useState } from 'react';
import { NavbarAdmin } from './NavbarAdmin';
import { UserSideNav } from './SideBar components/UserSideBav';
import { CartSideBar } from './SideBar components/CartSideBar';

export const SidebarAdmin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sideRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {

    }, [isSidebarOpen]);

    return (
        <>
            <div ref={sideRef}>
                <NavbarAdmin toggleSidebar={toggleSidebar} />
            </div>
            <aside
                className={`fixed top-0 left-0 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } bg-[#723fffdc] lg:translate-x-0 lg:w-64 lg:fixed lg:top-0 lg:left-0 lg:h-full lg:transition-none`}
            >

                <div className="h-full px-3 pb-4 overflow-y-auto pt-20 bg-white dark:bg-[#723fffdc]">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <UserSideNav />
                        </li>
                        <li>
                            <CartSideBar />
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};
