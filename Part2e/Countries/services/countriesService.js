import axios from "axios";

export const getAll = () => axios.get("https://restcountries.com/v3.1/all").then(response => response.data)
    .catch(error => {
        console.error("Error fetching dates", error)

        throw error; // Пробрасываем ошибку дальше

    })