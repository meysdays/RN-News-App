import React from "react";
import { Tabs } from "expo-router";
import {
  BookmarkIcon,
  FeedIcon,
  ProfileIcon,
  SearchIcon,
} from "@/src/assets/icons";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabsLayout = () => {
  const {bottom} = useSafeAreaInsets()
  return (
    <Tabs
      screenOptions={{
        animation: "fade",
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#0C0D0F",
          height: 95,
          paddingTop: 7,
          paddingBottom: bottom,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowColor: "transparent",
        },
        tabBarIconStyle: {
          flex: 1,
          marginTop: 4,
          marginBottom: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: "Inter_500Medium",
          marginBottom: 4,
          borderColor: "red",
          borderBottomColor: "red",
          
        },
        tabBarLabel: ({ focused, color, children }) => (
          <View
            style={{
              alignItems: "center",
              paddingBottom: 4,
              borderBottomWidth: focused ? 2 : 0,
              borderBottomColor: focused ? "red" : "transparent",
              minWidth: 70,
            }}
          >
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Inter_500Medium",
                letterSpacing: 1,
                color,
              }}
            >
              {children}
            </Text>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "FEEDS",
          tabBarIcon: ({ color }) => <FeedIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "SEARCH",
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "SAVE",
          tabBarIcon: ({ color }) => <BookmarkIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "PROFILE",
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
