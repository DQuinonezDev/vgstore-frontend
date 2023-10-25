import { useState, useEffect } from "react";
import { apiLogin } from "../api/apiLogin";
import Swal from "sweetalert2";
import { Logingoogle } from "./LoginGoogle";
import IMGLOG from "../../../assets/imgs/VGStoreBck.png";

export const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await apiLogin(mail, password);
        if (result) {
            Swal.fire({
                icon: "success",
                title: "Bienvenido",
                showConfirmButton: false,
                timer: 10000,
            }).then((r) => {
                if (result) {
                    const [header, payload, signature] = result.split(".");
                    const decodedPayload = JSON.parse(atob(payload));
                    const roleUser = decodedPayload.role;
                    if (roleUser === "ADMIN_ROLE") {
                        window.location.href = "/admin";
                    } else {
                        window.location.href = "/";
                    }
                }
            });
        }
    };

    return (
        <>
            <div className=" mb-2 flex-1 items-center justify-center py-12 px-6 lg:px-20">
                <div className="max-w-none w-full">
                    <div className="flex items-center">

                        <div className="font-customSB text-lg">
                            Inicia sesión con tu cuenta de&nbsp;
                        </div>
                        <div className="mr-4">
                            <img src={IMGLOG} alt="Not Found" className="w-28" />
                        </div>
                    </div>
                    <div className="my-4 flex before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black" />
                    <div className="text-md font-customRegular">
                        <p>Inicia sesión para poder acceder a todas las funciones</p>
                    </div>
                    <form className="space-y-4 md:space-y-6 mt-8" onSubmit={handleSubmit}>
                        <div>
                            {/* Block manda para abajo el input */}
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-customMed text-gray-900 " >
                                Correo electrónico:
                            </label>
                            <input
                                type="email"
                                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg
                                    focus:ring-primary-600 focus:border-primary-600 block lg:w-8/12 w-full p-2 placeholder-gray-500 dark:focus:ring-blue-600"
                                id="email"
                                placeholder="ejemplo@ejemplo.com"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                required />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-customMed text-gray-900 ">
                                Contraseña:
                            </label>
                            <input
                                type="password"
                                className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block lg:w-8/12 w-full p-2 placeholder-gray-500"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <button
                            type="submit"
                            className="relative flex justify-center lg:w-8/12 w-full text-white bg-[#7A63FF] hover:underline focus:ring-2
                            focus:ring-offset-2 focus:ring-violet-500 border-transparent hover:bg-custom focus:outline-none
                            font-customMed rounded-lg text-md py-2.5 text-center">
                            Iniciar sesión
                        </button>
                        <div>
                            <a href="#" className="text-sm font-customMed text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                    </form>
                    <div className="my-4 flex items-center before:mt-0.5 lg:w-8/12 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-customMed text-gray-800">
                            o inicia sesion con:
                        </p>
                    </div>
                    <div className="flex justify-center lg:w-8/12 w-full items-center">
                        <Logingoogle />
                    </div>
                </div>
            </div>
        </>
    );
};
