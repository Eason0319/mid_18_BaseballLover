import React from 'react';
import { useState } from 'react';
import { StyleSheet, Divider, Image, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../Theme/themeProvider';

import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import SceduleScreen from '../screens/ScheduleScreen';
import SettingScreen from '../screens/SettingScreen';
import ShoppingCartScreen from '../screens/SoppingCartScreen';
import MerchDetailScreen from '../screens/MerchDetailScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();




const MyTabs = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background,
        },
        tabBarActiveTintColor: theme.text,
        tabBarInactiveTintColor: theme.text,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ShopScreen"
        component={ShopStack}
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
        component={ScheduleStack}
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
        component={SettingStack}
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
        drawerStyle: { width: 300, },
        drawerLabelStyle: { fontSize: 24, fontWeight: '400', marginLeft: -20 },
        drawerItemStyle: { marginLeft: 30 }
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Mytabs"
        component={MyTabs}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="MLB.TV"
        component={SceduleScreen}
        options={{
          title: "MLB.TV",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="baseball" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="Scores"
        component={SceduleScreen}
        options={{
          title: "Scores",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="scoreboard" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="Stats"
        component={SceduleScreen}
        options={{
          title: "Stats",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="signal-cellular-3" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="Players"
        component={SceduleScreen}
        options={{
          title: "Players",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tickets"
        component={SceduleScreen}
        options={{
          title: "Tickets",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket-confirmation" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={SceduleScreen}
        options={{
          title: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={30} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
        headerTitleStyle: {
          color: theme.text,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "BaseballLover",
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              color={theme.text}
              size={28}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'cart'}
              color={theme.text}
              size={28}
              onPress={() => navigation.navigate('ShoppingCart')}
            />
          )
        }}
      />
    </Stack.Navigator>
  );
}

const ShopStack = ({ navigation }) => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
        headerTitleStyle: {
          color: theme.text,
        },
      }}
    >
      <Stack.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          title: "BaseballLover",
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              color={theme.text}
              size={28}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'cart'}
              color={theme.text}
              size={28}
              onPress={() => navigation.navigate('ShoppingCart')}
            />
          )
        }}
      />
      <Stack.Screen
        name="MerchDetail"
        component={MerchDetailScreen}
        options={({ route }) => ({
          title: "BaseballLover",
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              color={theme.text}
              onPress={() => navigation.navigate('Shop')}
              style={{ marginLeft: 0 }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'cart'}
              color={theme.text}
              size={28}
              onPress={() => navigation.navigate('ShoppingCart')}
            />
          )
        })}
      />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={({ route }) => ({
          title: "BaseballLover",
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              color={theme.text}
              size={30}
              onPress={() => navigation.navigate('Shop')}
              style={{ marginLeft: 0 }}
            />
          ),

        })}
      />
    </Stack.Navigator>
  );
}

const ScheduleStack = ({ navigation }) => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
        headerTitleStyle: {
          color: theme.text,
        },
      }}
    >
      <Stack.Screen
        name="Schedule"
        component={SceduleScreen}
        options={{
          title: "BaseballLover",
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              color={theme.text}
              size={28}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'cart'}
              color={theme.text}
              size={28}
              onPress={() => navigation.navigate('ShoppingCart')}
            />
          )
        }}
      />
    </Stack.Navigator>
  );
}

const SettingStack = ({ navigation }) => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
        headerTitleStyle: {
          color: theme.text,
        },
      }}
    >
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: "BaseballLover",
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              color={theme.text}
              size={28}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'cart'}
              color={theme.text}
              size={28}
              onPress={() => navigation.navigate('ShoppingCart')}
            />
          )
        }}
      />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer >
      <MyDrawer />
    </NavigationContainer>
  );
}





export default Navigation;