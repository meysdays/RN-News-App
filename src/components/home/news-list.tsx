import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { RecentIcon } from "@/src/assets/icons";

interface NewsListProps {
  id: string;
  image: string;
  title: string;
  source: string;
  time: string;
  description: string;
  onpress: () => void;
}

const NewsList = ({
  id,
  image,
  description,
  onpress,
  source,
  time,
  title,
}: NewsListProps) => {
  return (
    <View className="w-1/2 px-2 mb-4">
      <View className="border border-gray-700">
        <View className="w-full h-32 ">
          <Image
            className="w-full h-full"
            resizeMode="cover"
            source={{ uri: image }}
          />
        </View>

        <Pressable
          onPress={onpress}
          className="flex flex-col px-2 py-1 bg-[#27292D]/20 "
        >
          <View className="flex flex-row justify-between">
            <Text className="text-white">{source}</Text>
            <View className="flex flex-row">
              <RecentIcon />
              <Text>{time}</Text>
            </View>
          </View>

          <Text className="text-[18px] font-extrabold text-white">{title}</Text>

          <Text className="text-[14px] text-gray-500">{description}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewsList;
