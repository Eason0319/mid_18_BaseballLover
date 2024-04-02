import React from "react";
import { StyleSheet, Text, View, Image, Pressable, Linking } from "react-native";

const HighlightDetail = props => {
  let { highlight } = props;
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={styles.HighlightContent}>
        <Pressable onPress={() => Linking.openURL(highlight.url)}>
          <Image
            style={styles.HighlightImg}
            source={{ uri: highlight.HighlightImg }}
          />
        </Pressable>
        <Text style={styles.HighlightContentText}>{highlight.content}</Text>
      </View>
    </View>

  )
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
  GameHighlightTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  ViewAllTextStyle: {
    color: "#9D9D9D",
    alignSelf: 'flex-end',
  },
  HighlightContent: {
    width: 265,
    height: 210,
    marginLeft: 16,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginTop: 10,
  },
  HighlightImg: {
    width: 265,
    height: 149,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  HighlightContentText: {
    marginLeft: 9,
    marginTop: 6,
  }
});

export default HighlightDetail;
