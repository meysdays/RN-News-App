export interface Category {
  title: string;
  id: number;
}

export interface CategoryResponse {
  categories: Category[];
}

export interface Source {
  id: string
  name: string
}

export interface CategoryItem {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
// export interface CategoryItem {
//   id: string
//   img: string
//   source: string
//   time: string
//   title: string
//   description: string
// }

export interface CategoryItemResponse {
  status: string;
  totalResults: number;
  articles: CategoryItem[];
}
