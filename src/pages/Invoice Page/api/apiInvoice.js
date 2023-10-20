import axios from "axios";
const URL = "http://localhost:8080/api/invoice/";
const token = localStorage.getItem("token");

export const postInvoice = async () => {
    try {
        await axios.post(`${URL}add`, {}, { headers: { "x-token": token } });
        window.location.href = "/invoice";
    } catch (error) {
        console.error("Error al terminar la compra", error);
    }
}

export const getLastInvoice = async () => {
    try {
        const response = await axios.get(`${URL}show/last`, { headers: { "x-token": token } });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}