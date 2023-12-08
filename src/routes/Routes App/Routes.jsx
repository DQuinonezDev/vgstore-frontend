import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/Home Page/HomePage';
import { ProductInf } from '../../pages/Product Page/ProductInf';
import { Cart } from '../../pages/Cart Page/Cart';
import { AddressView } from '../../pages/Address page/components/AddressView';
import { Invoice } from '../../pages/Invoice Page/components/Invoice';
import { AdminPage } from '../../pages/Admin Pages/AdminPage';
import { LoginPage } from '../../pages/Login/LoginPage';
import { Navbar } from '../../components/NavBar/Navbar';
import { NavbarAdmin } from '../../pages/Admin Pages/components/NavbarAdmin';
import { isUserAuthentated } from '../../pages/Login/helper/auth';
import { SidebarAdmin } from '../../pages/Admin Pages/components/SidebarAdmin';
import { UsersView } from '../../pages/Admin Pages/Users Control/components/UsersView';

export const RouteApp = () => {
    const user = isUserAuthentated(); // Obtén el estado de autenticación del usuario
    const role = user.rol;

    console.log(user);
    console.log(user.rol);
    return (
        <>
            {!user.authenticated && <Navbar />}
            {user.authenticated && role === 'CLIENT_ROLE' && <Navbar />}

            <Routes>
                {/* Default Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/product/:id" element={<ProductInf />} />

                {/* Client Routes con Token */}
                {user.authenticated && role === 'CLIENT_ROLE' && (
                    <>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/address" element={<AddressView />} />
                        <Route path="/invoice" element={<Invoice />} />
                    </>
                )}

                {/* Admin Routes*/}
                {user.authenticated && role === 'ADMIN_ROLE' && (
                    <>
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/userview' element={<UsersView />} />

                    </>
                )}
            </Routes>
        </>
    );
};
