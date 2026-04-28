import { queryOptions } from "@tanstack/react-query";
import { CategoryItemResponse } from "../services/category/types";

const API_Key = "edaad9b9d20f4153b099f76e6ccd39ce";
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
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${name}&apikey=${API_Key}`,
    );
    const data: CategoryItemResponse = await response.json();
    if (!response.ok) {
        console.log("not good", response.status);
      throw new Error("An error occurred while fetching categories News");
    }
    return data;
  } catch (e) {
    if (e instanceof Error) {
        console.log(e?.message);
        
      throw new Error(e?.message);
    }
    throw new Error(
      (e as string) || "An error occurred while fetching categories",
    );
  }
};
