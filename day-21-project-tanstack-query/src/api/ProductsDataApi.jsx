import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosInstance";

export const fetchProductsApi = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    toast.error("Failed to load products");
    throw error;
  }
};
