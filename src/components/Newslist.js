import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import NewsDetail from "../components/NewsDetail";
import News from "../json/News.json";

const Newslist = () => {
    return (
        <View>
            <View style={styles.GameHighlightBarStyle}>
                <Text style={styles.GameHighlightTextStyle}>Latest News</Text>
                <Text style={styles.ViewAllTextStyle}>View All</Text>
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
        color: "#9D9D9D",
        alignSelf: 'flex-end',
      },
})

export default Newslist;