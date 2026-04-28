import { View, Text } from "react-native";
import React from "react";
import { LogoIcon, ProfileIcon } from "../assets/icons";

const TopHeader = () => {
  return (
    <View className="flex flex-row items-center justify-between mx-3">
      <View className="flex flex-row items-center w-1/4 gap-2">
        <View>
          <LogoIcon />
        </View>

        <View className="flex flex-col">
          <Text className="font-bold  text-white">NEWSROOM</Text>
          <Text className="text-gray-400 italic text-xs">LIVE WIRE</Text>
        </View>
      </View>

      <View className="">
        <ProfileIcon color={"gray"} />
      </View>
    </View>
  );
};

export default TopHeader;
