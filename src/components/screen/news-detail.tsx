import { View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const NewsDetail = (urlView: string) => {
  return (
    <View>
      <WebView source={{ uri: urlView }} style={{ flex: 1 }} />
    </View>
  );
};

export default NewsDetail;
