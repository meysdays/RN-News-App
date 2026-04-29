import { CancelIcon, SearchIcon } from "@/src/assets/icons";
import NewsList from "@/src/components/home/news-list";
import SkeletonCard from "@/src/components/skeleton";
import { useSearchNews } from "@/src/hooks/search/useSearchNews";
import GetSearch from "@/src/queryOptions/get-search";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState<string>("");

  // const { data, isLoading, isError, error } = useQuery(GetSearch(searchText));

  const { data, isLoading, isError, error, refetch } =
    useSearchNews(searchText);
  console.log(searchText);
  console.log(data);

  return (
    <View className="bg-[#0C0D0F] h-screen">
      <SafeAreaView edges={["top", "bottom"]}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />

        <View className="mx-3 gap-1">
          <Text className="text-red-500 tracking-wide">SEARCH</Text>
          <Text className="text-white text-3xl font-bold tracking-wide">
            Find articles
          </Text>
        </View>

        <View className="flex py-2 border border-red-500  mx-3 my-2">
          <View className="flex flex-row items-center gap-2 mx-2 ">
            <SearchIcon color={"gray"} />
            <TextInput
              value={searchText}
              placeholder="Enter a keyword"
              placeholderTextColor={"#ada7a6"}
              onChangeText={setSearchText}
              className="flex-1 text-white"
            />
            <Pressable hitSlop={20} onPress={() => setSearchText("")}>
              <CancelIcon />
            </Pressable>
          </View>
        </View>
        {data?.articles && (
          <View className="mx-3 mb-2">
            <Text className="text-gray-500">
              {data?.totalResults ?? 0} RESULTS FOR {searchText}
            </Text>
          </View>
        )}

        {!data?.articles && (
          <View className="flex flex-1 items-center justify-center">
            <Text className="text-gray-500 font-bold">SEARCH FOR KEYWORDS</Text>
          </View>
        )}

        {isLoading && <SkeletonCard />}

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
                className="w-full"
                classNameBottom="h-22"
                classNameImg="h-52"
                classNamePosition="bottom-120"
                tasks={item}
                onpress={() =>
                  router.push({ pathname: "/news", params: { url: item.url } })
                }
              />
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;
