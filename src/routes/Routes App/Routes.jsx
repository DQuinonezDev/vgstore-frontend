import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../../pages/Home Page/HomePage'
import { ProductInf } from '../../pages/Product Page/ProductInf'
import { Cart } from '../../pages/Cart Page/Cart'
import { AddressView } from '../../pages/Address page/components/AddressView'
import { Invoice } from '../../pages/Invoice Page/components/Invoice'
import { AdminPage } from '../../pages/Admin Pages/AdminPage'
import { LoginPage } from '../../pages/Login/LoginPage'

export const RouteApp = () => {
    return (
        <>
            <Routes>
                {/* Default Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/product/:id" element={<ProductInf />} />


                {/* Client Routes Whit Token */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/address" element={<AddressView />} />
                <Route path="/invoice" element={<Invoice />} />


                {/* Admin Routes */}
                <Route path='/admin' element={<AdminPage/>}/>
            </Routes>
        </>
    )
}
