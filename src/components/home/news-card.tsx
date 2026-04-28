import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { Category } from "@/src/services/category/types";
// import { CategoryItemData } from "@/src/app/data";
import NewsList from "./news-list";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGetCategories } from "@/src/hooks/category";
import { useQuery } from "@tanstack/react-query";
import getCategoryList from "@/src/queryOptions/get-category-list";

interface NewsCardprops {
  selectedCategory: Category | null;
}

const NewsCard = ({ selectedCategory }: NewsCardprops) => {
  // console.log(selectedCategory?.title);

  // const { data, isLoading, isError, error, refetch, isFetching } =
  //   useGetCategories(selectedCategory?.title ?? "");

  const { data, isLoading, isError, refetch, error } = useQuery(
    getCategoryList(selectedCategory?.title ?? ""),
  );

  if (isLoading) {
    return <Text className="text-white">Loading...</Text>;
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>{error.message}</Text>

        <Pressable
          onPress={() => refetch()}
          className="mt-4 px-4 py-2 bg-red-300 rounded"
        >
          <Text className="text-black">Retry</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data?.articles}
        renderItem={({ item }) => {
          if (!item) return null;

          return (
            <NewsList
              id={item.urlToImage}
              image={item.urlToImage}
              source={item.source?.name}
              time={item.publishedAt}
              title={item.title}
              description={item.description}
              onpress={() => router.push("/news")}
            />
          );
        }}
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
        keyExtractor={(item) => item.urlToImage}
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
