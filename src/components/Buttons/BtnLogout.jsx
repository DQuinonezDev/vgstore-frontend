import React from 'react'

export const BtnLogout = () => {

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.clear();
        window.location.href = '/';
    };

    return (
        <>
            <button onClick={() => cerrarSesion()}>Cerrar sesion</button>
        </>

    )
}
