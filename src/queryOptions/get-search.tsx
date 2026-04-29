import { checkInternetConnection } from "../lib/utils";
import { CategoryItemResponse } from "../services/category/types";



const getSearch = async (
  searchText: string
): Promise<CategoryItemResponse> => {
  
  const API_Key = "edaad9b9d20f4153b099f76e6ccd39ce";
  const hasInternet = await checkInternetConnection();

  if (!hasInternet) {
    throw new Error("No internet connection");
  }

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchText}&apiKey=${API_Key}`
  );

  const data: CategoryItemResponse = await response.json();

  if (!response.ok) {
    switch (response.status) {
      case 429:
        throw new Error("Too many requests. Please try again shortly.");
      case 500:
        throw new Error("Server error. Please try again later.");
      case 404:
        throw new Error("Articles not found.");
      default:
        throw new Error("Failed to fetch search results.");
    }
  }

  return data;
};

export default getSearch