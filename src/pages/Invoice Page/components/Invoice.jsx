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
        <>
            <h1>Invoice information</h1>
        </>
    )
}
