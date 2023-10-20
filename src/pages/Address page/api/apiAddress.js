import axios from "axios";
const URL = "http://localhost:8080/api/address/";
const token = localStorage.getItem("token");

export const getAddress = async () => {
    try {
        const response = await axios.get(`${URL}show`, { headers: { "x-token": token } });
        console.log(response.data.address);
        return response.data.address;
    } catch (error) {
        console.error(error);
    }
};

export const postAddress = async (street, reference, municipality, country, additionalInfo, phone) => {

    try {
        const response = await axios.post(`${URL}add`, {
            street,
            reference,
            municipality,
            country,
            additionalInfo,
            phone
        }, { headers: { "x-token": token } });

        console.log(response);
        return {
            success: true,
            message: "address add successfully",
        };

    } catch (error) {
        if (error.response) {
            const { data } = error.response;
            return {
                success: false,
                message: data.error,
            };
        } else {
            return {
                success: false,
                message: "Error",
            };
        }
    }
}

export const updateAddress = async (id, street, reference, municipality, country, additionalInfo, phone) => {
    try {
        const response = await axios.put(`${URL}update/${id}`, {
            street,
            reference,
            municipality,
            country,
            additionalInfo,
            phone
        }, { headers: { "x-token": token } });
        return true;

    } catch (error) {
        console.log(error);        
    }
}