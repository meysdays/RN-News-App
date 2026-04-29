import { View, Text } from "react-native";
import React, { createContext, PropsWithChildren } from "react";
import { CategoryItem } from "@/src/services/category/types";

const BookmarkContext = createContext<CategoryItem | undefined>(undefined)
const BOOKMARK_STORAGE_KEY = "BOOKMARK_STORAGE_KEY"

export default function BookmarkContextProvider({
  children,
}: PropsWithChildren) {
  return (
    <View>
      <Text>BookmarkContextProvider</Text>
    </View>
  );
}
