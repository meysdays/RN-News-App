import { Text, Pressable } from "react-native";
import React from "react";
import { cn } from "@/src/lib/utils";

interface CategoryItemProps {
  id: number;
  title: string;
  onpress: () => void;
  selected: boolean;
}

const CategoryItem = ({ id, title, onpress, selected }: CategoryItemProps) => {
  return (
    <Pressable onPress={onpress} className={cn("px-2 ")}>
      <Text
        className={cn("text-gray-500", selected && "text-white border-b-2 border-red-500 font-semibold pb-1.5")}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CategoryItem;
