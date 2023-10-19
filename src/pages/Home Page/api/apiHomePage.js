import axios from "axios";
const URL = "http://localhost:8080/api/product/show";

export const getProductsHM = async () => {
    try {
        const response = await axios.get(`${URL}`);
        console.log(response.data.productList);
        return response.data.productList;
    } catch (error) {
        console.error(error);
    }
};