import React from "react";
import { View, Image ,StyleSheet, Text} from "react-native";
import Highlightlist from "../components/HighlightList";
import Newslist from "../components/Newslist";


const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={styles.imageStyle}
        source={require("../img/HomeImg1.png")}
        alt='HomeImage1'
      />
      <Highlightlist />
      <Newslist />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 380,
    height: 214,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  GameHighlightBarStyle: {
    marginTop: 22,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  GameHighlightTextStyle:{
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  ViewAllTextStyle:{
    color: "#9D9D9D",
    alignSelf: 'flex-end',
  },
  HighlightContent:{
    width: 265,
    height: 210,
    marginLeft: 16,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginTop:10,
  },
  HighlightImg:{
    width: 265,
    height: 149,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  HighlightContentText:{
    marginLeft: 9,
    marginTop: 6,
  }
});

export default HomeScreen;
