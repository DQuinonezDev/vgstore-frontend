import React, { useEffect, useState } from 'react'
import { getProductsHM } from '../api/apiHomePage';
import { Navigate, useNavigate } from 'react-router-dom';

export const ProductHM = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    
    const viewProduct = async () => {
        const productsList = await getProductsHM();
        setProducts(productsList);
    }

    useEffect(() => {
        viewProduct();
    }, [])


    return (
        <>
            <h1>Products</h1>
            {products.map((p) => (

                <div key={p._id}>
                    <img src={p.img} alt="" />
                    <p>{p.name}</p>
                    <p>{p.price}</p>
                    

                    <a href={`/product?id=${p._id}`}
                    onClick={(event) => {
                        event.preventDefault();
                        navigate(`/product/${p._id}`)
                    }}
                    >Comprar</a>
                </div>

            ))}

        </>
    )
}
