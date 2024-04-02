import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking, TouchableOpacity } from 'react-native';


const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    star,
    image,
    description
  } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>
        <Text style={styles.titleStyle} >{title}</Text>
        <Text style={styles.artistStyle} >{artist}</Text>
      </View>
      <View style={styles.Scorestyle}>

      </View>
      <View style={styles.cardContainerStyle}>
          <Text style={{lineHeight: 24, marginBottom:28, textAlign:'center',}}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} >BUY NOW FOR $46.99</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },  
  imageStyle: {
    height: 300,
    width: 210,
    marginTop: 8,
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  titleStyle: {
    color: '#161616',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  artistStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666666',
    fontWeight: '400',
    marginTop: 8,
    marginBottom: 8
  },
  button:{
    backgroundColor: '#6200EE',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom:50,
  },
  buttonText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 16,
    color: '#fff',
  },
  Scorestyle:{
    flexDirection: "row",
    alignItems: "center"
  }
});

export default DetailScreen;
