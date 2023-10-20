import React, { useEffect, useState } from 'react'
import { deleteCartItem, getCart, postCart } from './api/apiCart';

export const Cart = () => {
    const [cart, serCart] = useState([]);

    const viewCart = async () => {
        try {
            const cart = await getCart();
            serCart(cart);
        } catch (error) {
            console.error("Error al obtener los datos del carrito:", error);
        }
    };

    useEffect(() => {
        viewCart();
    }, [])

    const cartQuantity = async (productId, newQuantity) => {
        try {
            const currentQuantity = cart.products.find(item => item.product._id === productId).quantity;

            if (newQuantity > currentQuantity) {
                const quantityToAdd = newQuantity - currentQuantity;
                await postCart(productId, quantityToAdd);
            } else if (newQuantity < currentQuantity) {
                const quantityToRemove = currentQuantity - newQuantity;
                await deleteCartItem(productId, quantityToRemove);
            }

            viewCart();
        } catch (error) {
            console.error("Error al modificar la cantidad del producto en el carrito:", error);
        }
    };

    return (
        <>
            <h1>Cart</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">img</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Sub total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cart.products && cart.products.map((productItem) => (
                                    <tr key={productItem.product._id}>
                                        <td>
                                            <img src={productItem.product.img} style={{ width: "105px" }} alt="" />
                                        </td>
                                        <td>{productItem.product.name}</td>
                                        <td>${productItem.product.price}</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={productItem.quantity}
                                                onChange={(e) => cartQuantity(productItem.product._id, e.target.value)}
                                            />
                                        </td>
                                        <td>${productItem.subtotal}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h3> Total: {cart.total}</h3>
                        <a href={'/address'}>Confirmar compra</a>
                    </div>
                </div>
            </div>

        </>
    )
}
