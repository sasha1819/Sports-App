import * as React from "react";
import { View, Text } from "react-native";

export const DetailsScreen = (props) => {
  console.log(props.route.params.content);
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        paddingTop: 100,
        justifyContent: "center",
      }}
    >
      <Text>{props.route.params.title}</Text>
      <Text>{props.route.params.description}</Text>
      <Text>{props.route.params.url}</Text>
      <Text>{props.route.params.author}</Text>
      <Text>{props.route.params.urlToImage}</Text>
      <Text>{props.route.params.content}</Text>
    </View>
  );
};
