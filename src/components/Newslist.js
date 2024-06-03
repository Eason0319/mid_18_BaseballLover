import React from "react";
import { View, Text, FlatList, StyleSheet, Image} from "react-native";
import NewsDetail from "../components/NewsDetail";
import News from "../json/News.json";
import styled from 'styled-components/native';

const Newslist = () => {

    const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
    `;

    return (
        <View style={{flex: 1}}>
            <View style={styles.GameHighlightBarStyle}>
                <ThemedText style={styles.GameHighlightTextStyle}>Latest News</ThemedText>
                <ThemedText style={styles.ViewAllTextStyle}>View All</ThemedText>
            </View>
            <FlatList
                data={News}
                renderItem={({ item }) => <NewsDetail News={item} />}
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

export default Newslist;