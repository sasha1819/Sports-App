import React from "react";
import { View, Button } from "react-native";

import { HomeScreen } from "../components/screens/HomeScreen";
import { DetailsScreen } from "../components/screens/DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigateBackArrow } from "../actions/ArrowBack";

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  const header = {
    headerLeft: () => <NavigateBackArrow />,
  };
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <View>
        <Button onPress={() => goBack()} title="Home" />
      </View> */}
      <Stack.Screen options={header} name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
