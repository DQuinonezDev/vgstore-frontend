import axios from "axios";
const URL = "http://localhost:8080/api/product/show";

export const getProductId = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        console.log(response.data.productList);
        return response.data.productList;
    } catch (error) {
        console.error(error);
    }
};

