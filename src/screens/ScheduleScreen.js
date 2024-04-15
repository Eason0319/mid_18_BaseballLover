import React, { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Box, Text, Center } from "@gluestack-ui/themed";
import { View, StyleSheet, Image, Pressable } from "react-native";
import AlScheduleScreen from './AlScheduleScreen';
import NlScheduleScreen from './NlScheduleScreen';


export default function TabAccountSettingScreeniewExample() {
   const [selectedIndex, setSelectedIndex] = useState(0);

   const SegmentedContent = () => {
      if (selectedIndex == 1) {
         return (
            <NlScheduleScreen />
         )
      } else {
         return (
          <AlScheduleScreen />
         )
      }
   }

   return (
      <View style={{flex: 1}}>
         <SegmentedControlTab
            values={["AL Schedule", "NL Schedule"]}
            tabStyle={{ 
               backgroundColor: "white",
               marginTop: 10,
               borderColor: "gray",
            }}
            activeTabStyle={{
               backgroundColor: "#7B7B7B",
               marginTop: 10,    
               borderColor: "#9D9D9D",       
            }}
            firstTabStyle={{ marginLeft: 20 }}
            lastTabStyle={{ marginRight: 20 }}
            tabTextStyle={{ fontSize: 24, padding: 5, color: "black"}}
            activeTabTextStyle={{ color: "white" }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
      </View>
   );
}