import { View, Text } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const News = () => {
  const { url } = useLocalSearchParams();
  return (
    <SafeAreaView style={{flex:1}}>
      <WebView
        originWhitelist={[url as string]}
        source={{
          uri: url as string,
        }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default News;
