import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <>
      <div className='font-customSB text-lg px-6 '>
        ¿No tienes cuenta?
      </div>
      <div className="w-11/12 my-4 flex px-4 items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black" />
      <div className='px-6 font-customRegular text-md'>
        <p>Al registrarte podras comprar tus juegos favoritos y pedirlos para que te los lleven a la puerta de tu casa,
          ademas de poder hacer preventa a todos aquellos juegos proximos a estrenarse</p>
      </div>
      <div className='px-6 mt-4'>
        <Link to={"/"}
          className="flex justify-center lg:w-5/12 w-full text-[#946CFF] bg-transparent hover:underline focus:ring-2
          focus:ring-offset-2 focus:ring-purple-500 font-customMed  rounded-lg text-md 
          py-2.5 text-center border-2 border-[#946CFF]">Registrate</Link>
      </div>

    </>
  )
}
