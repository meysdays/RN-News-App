import { View, Text, FlatList, StatusBar } from "react-native";
import React from "react";
import NewsList from "@/src/components/home/news-list";
import { useSave } from "@/src/context/home/bookmark-context";
import { router } from "expo-router";
import TopHeader from "@/src/components/header";
import { SafeAreaView } from "react-native-safe-area-context";

const BookmarkScreen = () => {
  const { task } = useSave();
  return (
    <View className="bg-[#0C0D0F] h-screen">
      {/* <Text className="text-white">BookmarkScreen</Text> */}
      <SafeAreaView edges={['top', 'bottom']}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TopHeader />
      <View className="my-4">
        
      <FlatList
        data={task}
        renderItem={({ item }) => {
          if (!item) return null;

          return (
            <NewsList
              id={item.url}
              image={item.urlToImage}
              source={item.source?.name}
              time={item.publishedAt}
              title={item.title}
              description={item.description}
              className="w-full"
              classNameBottom="h-22"
              classNameImg="h-52"
              classNamePosition="bottom-120 left-85"
              tasks={item}
              onpress={() =>
                router.push({ pathname: "/news", params: { url: item.url } })
              }
            />
          );
        }}
        contentContainerStyle={{
          // paddingHorizontal: 8,
          paddingBottom: 280,
        }}
      />
      </View>
      </SafeAreaView>
    </View>
  );
};

export default BookmarkScreen;
