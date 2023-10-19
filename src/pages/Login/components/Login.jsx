import { useState, useEffect } from 'react'
import { apiLogin } from '../api/apiLogin'
import Swal from 'sweetalert2'
import { Logingoogle } from './LoginGoogle'
import { BtnLogout } from '../../../components/Buttons/BtnLogout'


export const Login = () => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const result = await apiLogin(mail, password)
        if (result) {
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                showConfirmButton: false,
                timer: 1500
            })
            // .then((r) => {
            //     if (r.isConfirmed) {
            //         window.location.href = "/";
            //     } else {
            //         window.location.href = "/";
            //     }
            // })
        }
    }

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-black">
                        Correo electrónico:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-black">
                        Contraseña:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Iniciar sesión
                </button>
            </form>

            <BtnLogout/>
            <Logingoogle />

        </>
    )
}
