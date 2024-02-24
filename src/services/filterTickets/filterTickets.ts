import axiosInstance from "@/utils/axios";
import { setStateType } from "./filterTicketsTypes";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const filterTickets = async (
  search: string,
  setLoading: setStateType,
  setError: setStateType,
  setConnectionError: setStateType,
  page: number | string = "",
  limit: number | string = ""
) => {
  try {
    setLoading(true);
    setError(false);
    setConnectionError(false);
    const response = await axiosInstance.get(
      `/tickets?search=${search}&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err?.response?.status);
    if (err?.response?.status && err.response.status === 404) {
      setError(true);
    } else {
      setConnectionError(true);
      toast.error("Ocorreu um erro inesperado, tente novamente mais tarde");
    }
  } finally {
    setLoading(false);
  }
};
