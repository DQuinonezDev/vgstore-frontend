import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductId } from './api/apiProductInf';
import { postCart } from '../Cart Page/api/apiCart';

export const ProductInf = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (!isNaN(newQuantity)) {
            setQuantity(newQuantity);
        }
    };

    const addToCart = async (id, quantity) => {
        try {
            await postCart(id, quantity); 
        } catch (error) {
            console.error("Error al agregar el producto al carrito:", error);
        }
    };

    const viewProductId = async () => {
        try {
            const productId = await getProductId(id);
            setProduct(productId);
        } catch (error) {
            console.error("Error al obtener los datos de la habitación:", error);
        }
    };

    useEffect(() => {
        viewProductId();
    }, [])

    return (
        <>
            <h1>producto por ID</h1>

            <img src={product.img} alt="" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.status}</p>
            <p>{product.stock}</p>

            <label htmlFor="quantity">Cantidad: </label>
            <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
            />

            <button onClick={() => addToCart(id, quantity)}>Agregar al carrito</button>
        </>
    )
}
