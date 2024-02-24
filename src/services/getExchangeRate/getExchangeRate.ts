import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/last",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getExchangeRate = async () => {
  try {
    let value = null;
    const response = await axiosInstance.get("/USD");
    if (response.data) {
      value = Number(response.data.USDBRL.bid);
    }
    return value;
  } catch (error) {
    console.log(error);
  }
};
