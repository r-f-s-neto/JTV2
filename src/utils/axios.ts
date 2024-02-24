import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://65b98494b71048505a8aea91.mockapi.io/api/v1", // Coloque aqui a URL base da sua API
});

export default axiosInstance;
