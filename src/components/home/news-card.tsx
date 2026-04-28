import { View, Text, FlatList } from "react-native";
import React from "react";
import { Category } from "@/src/services/category/types";
import { CategoryItemData } from "@/src/app/data";
import NewsList from "./news-list";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface NewsCardprops {
  selectedCategory: Category | null;
}

const NewsCard = ({ selectedCategory }: NewsCardprops) => {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <FlatList
        data={CategoryItemData}
        renderItem={({ item }) => (
          <NewsList
            id={item.id}
            image={item.img}
            source={item.source}
            time={item.time}
            title={item.title}
            description={item.description}
            onpress={() => router.push("/news")}
          />
        )}
        ListHeaderComponent={
          <>
            <View className="mx-1 my-4 ">
              <Text className="text-red-500 tracking-wide text-xl">
                Section
              </Text>
              <Text className=" text-white font-serif font-bold text-2xl">
                {selectedCategory?.title}
              </Text>
            </View>

            <View className="mx-1 border mb-6 border-gray-800" />
          </>
        }
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          // paddingHorizontal: 8,
          paddingBottom: 280,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

export default NewsCard;
