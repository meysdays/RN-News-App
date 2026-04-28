import { api } from "@/src/lib/api";
import { checkInternetConnection } from "@/src/lib/utils";
import { CategoryItemResponse, CategoryResponse } from "./types";
import { isAxiosError } from "axios";
const API_Key = "89ca7cda8fd6cd236327e7ae69e62176"

export const fetchCategories = async (name: string) => {
  const hasInternet = await checkInternetConnection();

  if (!hasInternet) {
    throw new Error("No internet connection");
  }

  try {
    const response = await api.get<CategoryItemResponse>(`${name}&lang=en&apikey=${API_Key}`);

    console.log(response.data.articles);
    return response.data;
    
  } catch (error) {
    if (isAxiosError(error)) {
      const status = error.response?.status;

      console.log("fail");
      

      switch (status) {
        case 429:
          throw new Error("Too many requests. Please try again shortly.");

        case 500:
          throw new Error("Server error. Please try again later.");

        case 404:
          throw new Error("Categories not found.");

        default:
          throw new Error(
            error.response?.data?.message || "Failed to fetch categories.",
          );
      }
    }

    throw new Error("Something unexpected happened.");
  }
};
