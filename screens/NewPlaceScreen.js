import React, { useState } from "react";
import { StyleSheet, ScrollView, TextInput, Text, View } from "react-native";
import { HeaderTitle } from "react-navigation-stack";

const NewPlaceScreen = () => {

  const [titleValue, setTitleValue] = useState("");
  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };
  
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          value={titleValue}
          onChange={titleChangeHandler}
        />
        <Button title="Save Place" color={Colors.primary} onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = (navData) => {
  return { headerTitle: "Add Places" };
};

export default NewPlaceScreen;

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
