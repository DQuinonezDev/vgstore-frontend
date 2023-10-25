import React from 'react'
import { Login } from './components/Login'
import { Register } from '../Register Page/Register'
import { Navbar } from '../../components/NavBar/Navbar'
import { Footer } from '../../components/Footer/Footer'

export const LoginPage = () => {
    return (
        <>
            <Navbar />
            <div className="lg:flex lg:justify-center">
                <div className="lg:w-1/2 mt-auto">
                    <Login />
                </div>

                <div className="lg:w-1/2 lg:mt-14 mt-0">
                    <Register />
                </div>
            </div>
            <div className='mt-16'>
            <Footer/>
            </div>
        </>
    )
}
