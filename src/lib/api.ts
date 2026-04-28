import axios from "axios";

export const api = axios.create({
  baseURL: "https://gnews.io/api/v4/top-headlines?category=",
  headers: {
    "Content-Type": "application/json"
  }
});
