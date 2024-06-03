import React from "react";
import { Text } from "react-native";
import Shoplist from "../components/Shoplist";
import styled from 'styled-components/native';

const ShopScreen = ({ navigation }) => {

  const Container = styled.View`
        flex: 1;
        background-color: ${(props) => props.theme.background};
    `;

  return (
    <Container>
      <Shoplist
        navigation={navigation}
      />
    </Container>
  );
};

export default ShopScreen;