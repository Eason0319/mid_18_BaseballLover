import React from 'react';
import { useState } from 'react';
import { StyleSheet, Divider, Image, Text, Pressable } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import WishlistScreen from '../screens/WishListScreen';
import MyBookScreen from '../screens/MyBookScreen';
import MyTheme from '../Theme';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


/*const CustomDrawerContent = (props) => {
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <Image
        w={10}
        h={10}
        marginTop={20}
        margin={5}
        source={require("../img/UserImg.png")}
        alt='userImage'
      />
      <Text style={styles.user}>May</Text>
      <Divider my="2" />
      <DrawerItemList {...props} />

    </DrawerContentScrollView> 
  );
}*/

const MyTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        // headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          titleStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ShopScreen"
        component={WishlistScreen}
        options={{
          headerShown: false,
          title: "Shop",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ScheduleScreen"
        component={WishlistScreen}
        options={{
          headerShown: false,
          title: "Schedule",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={MyBookScreen}
        options={{
          headerShown: false,
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: '#6200EE',
        drawerInactiveTintColor: 'gray',
        drawerStyle: { width: 250 },
        drawerLabelStyle: { fontSize: 18, fontWeight: '400' }
      }}
      /*drawerContent={props => <CustomDrawerContent{...props} />}*/
    >
      <Drawer.Screen
        name="Mytabs"
        component={MyTabs}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={MyBookScreen}
        options={{
          title: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingStack"
        component={MyBookScreen}
        options={{
          title: "Setting",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "BaseballLover",
          headerTitleStyle: {fontSize: 36, fontWeight: 800},
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={28}
            />
          )
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: "",
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.goBack(null)}
              style={{ marginLeft: 0 }}
            />
          ),
          headerRight: () => (
            <Pressable onPress={() => toggleFunction()}>
              {toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={26} /> :
                <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  user: {
    fontSize: 24,
    fontWeight: 500,
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 20,
  }})



export default Navigation;