import { queryOptions } from "@tanstack/react-query";
import { CategoryItemResponse } from "../services/category/types";
import { checkInternetConnection } from "../lib/utils";

const API_Key = "270d325505aa4f7ba6196cf89728b780";
// const API_Key = "89ca7cda8fd6cd236327e7ae69e62176";

export default function getCategoryList(name: string) {
  return queryOptions({
    queryKey: ["news", name],
    queryFn: () => getcategoryNews(name),
  });
}

const getcategoryNews = async (
  name: string,
): Promise<CategoryItemResponse | null> => {
  const hasInternet = await checkInternetConnection();

  if (!hasInternet) {
    throw new Error("No internet connection");
  }
  let status: number = 0;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${name}&apikey=${API_Key}`,
    );
    const data: CategoryItemResponse = await response.json();
    if (!response.ok) {
      status = response.status;
      console.log("not good", response.status);
      throw new Error("An error occurred while fetching categories News");
    }
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e?.message);

      switch (status) {
        case 429:
          throw new Error("Too many requests. Please try again shortly.");

        case 500:
          throw new Error("Server error. Please try again later.");

        case 404:
          throw new Error("Categories not found.");

        default:
          throw new Error(e?.message || "Failed to fetch categories.");
      }

      // throw new Error(e?.message);
    }
    throw new Error(
      (e as string) || "An error occurred while fetching categories",
    );
  }
};
