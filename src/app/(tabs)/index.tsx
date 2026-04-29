import TopHeader from "@/src/components/header";
import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import Categories from "@/src/components/home/category";
import { Category } from "@/src/services/category/types";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsCard from "@/src/components/home/news-card";

const FeedScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>({
    id: 1,
    title: "HEALTH",
  });
  return (
    <View className=" bg-[#0C0D0F] h-screen">
      <SafeAreaView style={{}}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <TopHeader />

        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <NewsCard selectedCategory={selectedCategory} />
      </SafeAreaView>
    </View>
  );
};

export default FeedScreen;
