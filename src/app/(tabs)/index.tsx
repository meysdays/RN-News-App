import TopHeader from "@/src/components/header";
import React, { useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { cn } from "@/src/lib/utils";
import Categories from "@/src/components/home/category";
import { Category } from "@/src/services/category/types";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsCard from "@/src/components/home/news-card";

const FeedScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>({
    id: 1,
    title: "TOP STORIES",
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

        {/* <ScrollView> */}
          

          <NewsCard selectedCategory={selectedCategory} />
        {/* </ScrollView> */}
      </SafeAreaView>
    </View>
  );
};

export default FeedScreen;
