import React, { useState, useEffect, useRef } from 'react';
import { getCart } from '../../pages/Cart Page/api/apiCart';
import { isUserAuthentated } from '../../pages/Login/helper/auth';

export const BtnCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const cartRef = useRef(null);
    const user = isUserAuthentated();

    const viewCart = async () => {
        try {
            const cartData = await getCart();
            setCart(cartData);
        } catch (error) {
            console.error("Error al obtener los datos del carrito:", error);
        }
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    useEffect(() => {
        viewCart();
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };
        if (isCartOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isCartOpen]);

    return (
        <div className="relative inline-block text-center" ref={cartRef}>
            <button
                onClick={toggleCart}
                className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                type="button"
            >
                <div className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </div>
            </button>

            {isCartOpen && (
                <div className="z-20 absolute mt-1 lg:-right-5 -right-16 lg:w-[450px] w-80 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-200">
                        Carrito de Compras
                    </div>

                    {user.authenticated ? (
                        cart.products && cart.products.length > 0 ? (
                            cart.products.map((productItem) => (
                                <div key={productItem.product._id} className="divide-y divide-gray-100 dark:divide-gray-700">
                                    <div className="flex px-4 py-3 hover:bg-gray-100 dark:hover-bg-gray-700">
                                        <div className="flex-shrink-0">
                                            <img src={productItem.product.img} style={{ width: "80px", height: "80px" }} alt={productItem.product.name} />
                                        </div>
                                        <div className="w-full pl-3">
                                            <div className="text-gray-700 text-lg mb-1.5 dark:text-gray-400">
                                                {productItem.product.name}
                                            </div>
                                            <div className="text-xs text-gray-500 mb-1 dark:text-gray-400">
                                                Cantidad: {productItem.quantity}
                                            </div>
                                            <div className="text-lg font-semibold text-blue-600 dark:text-blue-500">
                                                $ {productItem.subtotal}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-4 text-gray-700 text-center">
                                {cart.products ? "El carrito está vacío." : "No tienes un carrito aún."}
                            </div>
                        )
                    ) : (
                        <div className="p-4 text-gray-700 text-center">
                            Debes iniciar sesión para ver tu carrito.
                        </div>
                    )}

                    {user.authenticated && cart.products && cart.products.length > 0 && (
                        <div>
                            <hr className="my-4 border-t border-gray-200" />
                            <h1 className="px-4 py-2 text-lg font-semibold text-center text-gray-700 dark:text-gray-400">Total: ${cart.total}</h1>
                            <a
                                href="/cart"
                                className="block py-3 text-lg font-semibold text-center text-white bg-[#733FFF] hover-bg-[#946CFF] rounded-b-lg"
                            >
                                Ver Carrito
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};