import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../../pages/Login/components/Login'
import { HomePage } from '../../pages/Home Page/HomePage'
import { ProductInf } from '../../pages/Product Page/ProductInf'
import { clientRoutes } from '../Auths/AuthRoutes'
import { Cart } from '../../pages/Cart Page/Cart'
import { AddressView } from '../../pages/Address page/components/AddressView'
import { Invoice } from '../../pages/Invoice Page/components/Invoice'

export const RouteApp = () => {
    return (
        <>
            <Routes>
                {/* Default Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<ProductInf />} />


                {/* Client Routes Whit Token */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/address" element={<AddressView />} />
                <Route path="/invoice" element={<Invoice />} />
            </Routes>
        </>
    )
}
