import React from "react";
import { Dimensions } from "react-native";
import { get } from "../entities/index";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const num = width / 3;

const MainButton = (props) => {
  const getData = async () => {
    const res = await get(props.title);
    props.setArticle(res.data.data.articles[0]);
  };

  return (
    <TouchableOpacity onPress={() => getData()} style={styels.container}>
      <Text style={styels.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styels = StyleSheet.create({
  container: {
    width: num - 20,
    marginBottom: 10,
    height: 40,
    borderRadius: 40,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    color: "white",
  },
});

export default MainButton;
