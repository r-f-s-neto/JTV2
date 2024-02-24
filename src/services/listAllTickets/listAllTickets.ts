import axiosInstance from "@/utils/axios";
import { setStateType } from "./listAllTicketsTypes";
import { toast } from "react-toastify";

export const listAllTickets = async (
  setLoading: setStateType,
  setConnectionError: setStateType
) => {
  try {
    setLoading(true);
    setConnectionError(false);
    const response = await axiosInstance.get(`/tickets`);
    return response.data;
  } catch (error) {
    setConnectionError(true);
    toast.error("Ocorreu um erro inesperado, tente novamente mais tarde");
  } finally {
    setLoading(false);
  }
};
