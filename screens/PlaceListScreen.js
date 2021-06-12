import React from "react";
import { StyleSheet,HeaderButtons,Item, Text, View } from "react-native";
import HeaderButton from "../components/HeaderButton";

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
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
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
