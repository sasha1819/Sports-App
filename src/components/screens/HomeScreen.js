import React, { useState } from "react";
import { get } from "../../entities/index";

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

  const [ListCategories, setListCategories] = useState(categories);

  const [filteredText, setFilteredText] = useState("");

  const categoriesInfo = () => {
    ListCategories.filter((text) => {
      if (!text) return false;
      if (text.toLowerCase() === filteredText.toLowerCase()) {
        setListCategories([text]);
      }
    });
  };

  const getData = async (value) => {
    const res = await get(value);
    setArticle(res.data.data.articles);
  };

  const categoriesList = () => {
    return ListCategories.map((value, index) => {
      return (
        <MainButton
          setArticle={setArticle}
          key={index + "-button"}
          title={value}
          getData={getData}
        />
      );
    });
  };

  const oneArticle = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", item)}
        key={index + "Art"}
        style={{ borderWidth: 1 }}
      >
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
        <TextInput setFilteredText={setFilteredText} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          {categoriesList()}
        </View>
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
