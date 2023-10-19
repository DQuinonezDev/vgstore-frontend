import axios from 'axios';
import Swal from 'sweetalert2';
const URL = "http://localhost:8080/api/auth/";


export const apiLogin = async (mail, password) => {
    try {
        const response = await axios.post(`${URL}login`, {
            mail,
            password,
        });

        const token = response.data.token;
        const role = response.data.role;
        console.log(response);


        token ? localStorage.setItem("token", token) : null;
        token ? localStorage.setItem("role", role) : null;

        return token;

    } catch ({
        response: {
            data: { message },
        },
    }) {
        Swal.fire({
            icon: "error",
            title: "Informacion Incorrecta",
            text: "Correo o Password Incorrectos",
            confirmButtonText: "Ok",
        });
    }
}

export const apiLoginGoogle = async (email, family_name, given_name,) => {
    try {
        const backendResponse = await axios.post(`${URL}google-login`, {
            name: given_name,
            lastname: family_name,
            mail: email,
        });

        const token = backendResponse.data.token;
        const role = backendResponse.data.role;

        console.log(backendResponse);
        console.log(token);
        console.log(role);

        token ? localStorage.setItem('token', token) : null;
        token ? localStorage.setItem('role', role) : null;

        return token;
    } catch (error) {
        console.error('Error en el inicio de sesión con Google:', error);
        throw error;
    }
};