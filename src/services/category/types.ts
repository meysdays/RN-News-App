export interface Category {
  title: string;
  id: number;
}

export interface CategoryResponse {
    categories: Category[]
}

export interface CategoryItem {
  id: string
  img: string
  source: string
  time: string
  title: string
  description: string
}

export interface CategoryItemResponse {
  items: CategoryItem[];
}