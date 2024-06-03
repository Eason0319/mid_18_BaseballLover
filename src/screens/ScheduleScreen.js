import React, { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Box, Text, Center } from "@gluestack-ui/themed";
import { View, StyleSheet, Image, Pressable } from "react-native";
import AlScheduleScreen from './AlScheduleScreen';
import NlScheduleScreen from './NlScheduleScreen';
import styled from 'styled-components/native';
import { useTheme } from '../Theme/themeProvider';


export default function TabAccountSettingScreeniewExample() {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const { theme, toggleTheme } = useTheme();

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

   const Container = styled.View`
      flex: 1;
      background-color: ${(props) => props.theme.background};
    `;

   return (
      <Container style={{flex: 1}}>
         <SegmentedControlTab
            values={["AL Schedule", "NL Schedule"]}
            tabStyle={{ 
               backgroundColor: theme.SegmentedControlBg,
               marginTop: 10,
               borderColor: "gray",
            }}
            activeTabStyle={{
               backgroundColor: theme.ActivedSegmentedControlBg,
               marginTop: 10,    
               borderColor: "#9D9D9D",       
            }}
            firstTabStyle={{ marginLeft: 20 }}
            lastTabStyle={{ marginRight: 20 }}
            tabTextStyle={{ fontSize: 24, padding: 5, color: theme.SegmentedControlText}}
            activeTabTextStyle={{ color: "white" }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
      </Container>
   );
}