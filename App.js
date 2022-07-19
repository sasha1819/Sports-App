import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { get } from "./src/entities/index";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  const getData = async () => {
    const res = await get("science");
    console.log(res.data.data.articles[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      <RootNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
