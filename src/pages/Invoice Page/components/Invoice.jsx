import React, { useEffect, useState } from 'react'
import { getLastInvoice } from '../api/apiInvoice';

export const Invoice = () => {

    const [invoice, setInvoice] = useState([]);

    const viewInvioce = async () => {
        const invoiceLast = await getLastInvoice();
        setInvoice(invoiceLast);
    }

    useEffect(() => {
        viewInvioce();
    }, [])

    return (
        <div className="invoice-container">
            <h1>Invoice Information</h1>
            {invoice && (
                <div className="invoice">
                    <div className="invoice-details">
                        <h2>Invoice Details</h2>
                        <p>Invoice ID: {invoice._id}</p>
                        <p>Created At: {new Date(invoice.createdAt).toLocaleString()}</p>
                    </div>
                    {invoice.user && (
                        <div className="user-details">
                            <h2>User Details</h2>
                            <p>Name: {invoice.user.name} {invoice.user.lastname}</p>
                            <p>Email: {invoice.user.mail}</p>
                        </div>
                    )}
                    {invoice.shippingAddress && (
                        <div className="shipping-address">
                            <h2>Shipping Address</h2>
                            <p>Street: {invoice.shippingAddress.street}</p>
                            <p>Reference: {invoice.shippingAddress.reference}</p>
                            <p>Municipality: {invoice.shippingAddress.municipality}</p>
                            <p>Country: {invoice.shippingAddress.country}</p>
                            <p>Additional Info: {invoice.shippingAddress.additionalInfo}</p>
                            <p>Phone: {invoice.shippingAddress.phone}</p>

                        </div>
                    )}
                    <div className="products">
                        <h1>Products</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoice.products && invoice.products.map((product) => (
                                    <tr key={product.product._id}>
                                        <td>{product.product.name}</td>
                                        <td>${product.product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.subtotal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="total">
                        <h2>Total</h2>
                        <p>Total Amount: ${invoice.total}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
