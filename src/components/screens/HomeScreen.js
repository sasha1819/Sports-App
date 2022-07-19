import React, { useState } from "react";

import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import MainButton from "../../actions/MainButton";
import TextInput from "../../components/TextInput";
import { categories } from "../../constants/mock";

export const HomeScreen = ({ navigation }) => {
  const [article, setArticle] = useState([]);
  const categoriesList = () => {
    return categories.map((value, index) => {
      return (
        <MainButton
          setArticle={setArticle}
          key={index + "-button"}
          title={value}
        />
      );
    });
  };

  const oneArticle = ({ item, index }) => {
    console.log(item);
    return (
      <TouchableOpacity key={index + "Art"} style={{ borderWidth: 1 }}>
        <Text>{item.title}</Text>
        <Text>{item.publishedAt}</Text>
        <Image
          style={{ height: 50, width: 50 }}
          source={{
            uri: item.urlToImage,
          }}
        />
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View>
        <TextInput />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            paddingLeft: 20,
            // justifyContent: "space-evenly",
          }}
        >
          {categoriesList()}
        </View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      {article.length !== 0 && (
        <FlatList data={article} renderItem={oneArticle} />
      )}
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      ></View>
    </View>
  );
};
