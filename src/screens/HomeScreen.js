import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Highlightlist from "../components/HighlightList";
import Newslist from "../components/Newslist";
import Swiper from 'react-native-swiper'


const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Swiper
        removeClippedSubviews={false}
        loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
        autoplay={true}                //自动轮播
        autoplayTimeout={3}          //每隔3秒切换

        dot={<View style={{    //未选中的圆点样式
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 5,
          marginBottom: -20,
          borderWidth: 2,
          borderColor: 'white'
        }} />}
        activeDot={<View style={{    //选中的圆点样式
          backgroundColor: 'white',
          width: 10,
          height: 10,
          borderRadius: 10,
          marginBottom: -20,
          marginHorizontal: 5
        }} />}
      >
          <Image
            source={require("../img/HomeImg1.png")}
            style={styles.imageStyle}
          />
          <Image
            source={require("../img/HomeImg2.png")}
            style={styles.imageStyle}
          />
          <Image
            source={require("../img/HomeImg3.png")}
            style={styles.imageStyle}
          />
          <Image
            source={require("../img/HomeImg4.png")}
            style={styles.imageStyle}
          />
          <Image
            source={require("../img/HomeImg5.png")}
            style={styles.imageStyle}
          />
      </Swiper>
      <Highlightlist />
      <Newslist />

    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 380,
    height: 220,
    marginHorizontal: 16,
    borderRadius: 10,
  }
});

export default HomeScreen;
