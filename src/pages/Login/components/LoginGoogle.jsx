import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { apiLoginGoogle } from '../api/apiLogin';

export const Logingoogle = () => {

    const responseGoogle = async (credentialResponse) => {
        try {
            const idToken = credentialResponse.credential;
            const decodedToken = jwt_decode(idToken);

            const { email, family_name, given_name } = decodedToken;

            const backendResponse = await apiLoginGoogle(email, family_name, given_name);
            if (backendResponse) {
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <GoogleOAuthProvider clientId="157317729776-eat6a5mbcdp5ktmigg61f8f719ippiin.apps.googleusercontent.com">
                <GoogleLogin
                    width={300}
                    onSuccess={responseGoogle}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

