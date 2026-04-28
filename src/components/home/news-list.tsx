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

const truncateTextSmart = (text: string, maxLength: number): string => {
  if (!text) return "";

  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength);

  return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "...";
};

const NewsList = ({
  id,
  image,
  description,
  onpress,
  source,
  time,
  title,
}: NewsListProps) => {
  const desc = truncateTextSmart(description, 30);
  const tit = truncateTextSmart(title, 30);
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
          className="flex flex-col justify-between h-34 px-2 py-2 gap-1.5 bg-[#27292D]/20 "
        >
          <View className="flex flex-row items-center justify-between">
            <Text className="text-red-500">{source}</Text>
            {/* <View className="flex flex-row">
              <RecentIcon />
              <Text>{time}</Text>
            </View> */}
          </View>

          <Text className="text-[18px] font-extrabold text-white">{tit}</Text>

          <Text className="text-[14px] text-gray-500">{desc}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewsList;
