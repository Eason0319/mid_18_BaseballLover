import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import HighlightDetail from "./HighlightDetail";
import section from "../json/highlight_section.json";
import styled from 'styled-components/native';

const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
    `;

const Highlightlist = () => {
  
  return (
    <View>
      <View style={styles.GameHighlightBarStyle}>
        <ThemedText style={styles.GameHighlightTextStyle}>Game Highlights</ThemedText>
        <ThemedText style={styles.ViewAllTextStyle}>View All</ThemedText>
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
    alignSelf: 'flex-end',
  },
})

export default Highlightlist;
