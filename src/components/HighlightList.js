import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import HighlightDetail from "./HighlightDetail";
import section from "../json/highlight_section.json";

const Highlightlist = () => {
  

  return (
    <View>
      <View style={styles.GameHighlightBarStyle}>
        <Text style={styles.GameHighlightTextStyle}>Game Highlights</Text>
        <Text style={styles.ViewAllTextStyle}>View All</Text>
      </View>
      <FlatList
        horizontal={true}
        data={section}
        renderItem={({item}) => <HighlightDetail highlight={item} />}
        keyExtractor={item => item.Key}
      />
    </View>
  )
};

const styles = StyleSheet.create({
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
})

export default Highlightlist;
