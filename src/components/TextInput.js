import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  const [text, onChangeText] = React.useState("");
  const textChanging = (value) => {
    props.setFilteredText(value);
    onChangeText(value);
  };
  return (
    <SafeAreaView>
      <TextInput
        // onEndEditing={e}
        style={styles.input}
        onChangeText={textChanging}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Input;
