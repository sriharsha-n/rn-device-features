import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HeaderButtons from "../components/HeaderButton";

const PlaceListScreen = () => {
  return (
    <View>
      <Text>Place List Screen</Text>
    </View>
  );
};

PlaceListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Add Places"
          iconName="md-add"
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default PlaceListScreen;

const styles = StyleSheet.create({});
