import axios from "axios";
const URL = "http://localhost:8080/api/user/";

export const getUsers = async () => {
    try {
        const response = await axios.get(`${URL}show`);
        console.log(response.data.userList);
        return response.data.userList;
    } catch (error) {
        console.error(error);
    }
};