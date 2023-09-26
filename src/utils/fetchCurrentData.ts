import axios from "axios";
import { url_production } from "../main";
export const fetchCurrentData = async () => {
    try {
        const response = await axios.get(`${url_production}/api/users`, {
            headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
        });
        return response ? response.data : { error: true, message: "Error de cliente " };
    } catch (error) {
        return error;
    }
};