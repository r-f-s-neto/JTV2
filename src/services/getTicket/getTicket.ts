import axiosInstance from "@/utils/axios";
import { idType } from "./getTicketTypes";
import { toast } from "react-toastify";

export const getTicket = async (id: idType) => {
  let ticketInfo = null;
  try {
    const response = await axiosInstance.get(`/tickets/${id}`);
    if (response.data) {
      ticketInfo = response.data;
    }
  } catch (error) {
    console.log(error);
    toast.error("Ocorreu um erro inesperado, tente novamente mais tarde");
  } finally {
    return ticketInfo;
  }
};
