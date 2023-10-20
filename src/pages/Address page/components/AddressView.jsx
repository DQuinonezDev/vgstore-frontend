import React, { useEffect, useState } from 'react';
import { getAddress, postAddress, updateAddress } from '../api/apiAddress';
import { postInvoice } from '../../Invoice Page/api/apiInvoice';

export const AddressView = () => {
    const [address, setAddress] = useState({
        street: '',
        reference: '',
        municipality: '',
        country: '',
        additionalInfo: '',
        phone: '',
    });

    const [addressExists, setAddressExists] = useState(false);

    const viewAddress = async () => {
        const addressUser = await getAddress();
        setAddressExists(!!addressUser);
        if (addressUser) {
            setAddress(addressUser);
        }
    };

    useEffect(() => {
        viewAddress();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (addressExists) {
            await updateAddress(address._id, address.street, address.reference, address.municipality, address.country, address.additionalInfo, address.phone);
        } else {
            await postAddress(address.street, address.reference, address.municipality, address.country, address.additionalInfo, address.phone);
        }
        await postInvoice();

    };

    return (
        <div>
            <h2>AddressView</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Street:
                    <input type="text" name="street" value={address.street} onChange={handleChange} />
                </label>
                <label>
                    Reference:
                    <input type="text" name="reference" value={address.reference} onChange={handleChange} />
                </label>
                <label>
                    Municipality:
                    <input type="text" name="municipality" value={address.municipality} onChange={handleChange} />
                </label>
                <label>
                    Country:
                    <input type="text" name="country" value={address.country} onChange={handleChange} />
                </label>
                <label>
                    Additional Info:
                    <input type="text" name="additionalInfo" value={address.additionalInfo} onChange={handleChange} />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={address.phone} onChange={handleChange} />
                </label>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};
