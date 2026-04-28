import { View, FlatList } from "react-native";
import React from "react";
import { Category } from "@/src/services/category/types";
import { CategoryData } from "@/src/app/data";
import CategoryItem from "./category-item";

interface CatergoryProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category) => void;
}

const Categories = ({ onSelectCategory, selectedCategory }: CatergoryProps) => {
  return (
    <View className="mt-4 py-2 border-t border-b border-gray-500 bg-[#27292D]/20">
      <FlatList
        data={CategoryData}
        renderItem={({ item }) => (
          <CategoryItem
            title={item.title}
            id={item.id}
            selected={item.id === selectedCategory?.id}
            onpress={() => onSelectCategory(item)}
          />
        )}
        // keyExtractor={(item) =>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
