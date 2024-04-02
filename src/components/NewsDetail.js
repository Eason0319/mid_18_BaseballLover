import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const NewsDetail = props => {
    let { News } = props;
    return (
        <View style={styles.Newsbar}>
            <Image
                style={styles.NewsImg}
                source={{ uri:  News.NewsImg}}
            />
            <Text style={styles.NewsContent}>{News.NewsContent}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Newsbar: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 34,
        width: 310,
    },
    NewsImg: {
        height: 33,
        width: 33,
        marginRight: 12
    },
    NewsContent: {
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center'
    }
});

export default NewsDetail;