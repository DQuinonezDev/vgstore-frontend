import axios from "axios";
const URL = "http://localhost:8080/api/cart/";
const token = localStorage.getItem("token");

export const getCart = async () => {
    try {
        const response = await axios.get(`${URL}show`, { headers: { "x-token": token } });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const postCart = async (id, quantity) => {
    try {
        await axios.post('http://localhost:8080/api/cart/add', { productId: id, quantity }, { headers: { "x-token": token } });
        window.location.href = "/cart";
    } catch (error) {
        console.error("Error al agregar el producto al carrito:", error);
    }
}

export const deleteCartItem = async (id, quantity) => {
    try {
        await axios.delete(`http://localhost:8080/api/cart/delete/${id}`, { headers: { "x-token": token }, data: { quantity } });
        window.location.href = "/cart"; 
    } catch (error) {
        console.error("Error al eliminar el producto del carrito:", error);
    }
};

