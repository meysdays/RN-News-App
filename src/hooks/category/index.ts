import { fetchCategories } from "@/src/services/category";
import { useQuery } from "@tanstack/react-query";

export function useGetCategories(name: string) {
  console.log("tanstack", name);

  return useQuery({
    queryKey: ["categories", name],
    queryFn: () => fetchCategories(name),
  });
}
