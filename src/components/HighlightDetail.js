import React from "react";
import { StyleSheet, Text, View, Image, Pressable, Linking } from "react-native";
import styled from 'styled-components/native';

const HighlightDetail = props => {
  let { highlight } = props;

  const ThemedText = styled.Text`
    color: ${(props) => props.theme.text};
    `;
  const HighLightBox = styled.View`
    background-color: ${(props) => props.theme.highLightBox};
    `;

  return (
    <View style={{ flexDirection: 'column' }}>
        <HighLightBox style={styles.HighlightContent}>
          <Pressable onPress={() => Linking.openURL(highlight.url)}>
            <Image
              style={styles.HighlightImg}
              source={{ uri: highlight.HighlightImg }}
            />
          </Pressable>
          <ThemedText style={styles.HighlightContentText}>{highlight.content}</ThemedText>
        </HighLightBox>
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
  HighlightContent: {
    width: 265,
    height: 210,
    marginLeft: 16,
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
