import axios from "axios";

export const userFetchForContact = async () => {
    console.log("userFetchForContact called");
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}