import axiosInstance from "@/utils/axios";
import { setStateType } from "./listPageTicketsTypes";
import { toast } from "react-toastify";

export const listPageTickets = async (
  setLoading: setStateType,
  setConnectionError: setStateType,
  page: number,
  limit: number = 6
) => {
  try {
    setLoading(true);
    setConnectionError(false);
    const response = await axiosInstance.get(
      `/tickets?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    setConnectionError(true);
    toast.error("Ocorreu um erro inesperado, tente novamente mais tarde");
  } finally {
    setLoading(false);
  }
};
