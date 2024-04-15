import React from "react";
import { Text } from "react-native";
import Shoplist from "../components/Shoplist";

const ShopScreen = ({ navigation }) => {
  return (
    <Shoplist
      navigation={navigation}
    />
  );
};

export default ShopScreen;