import React from 'react'
import {Image, Text} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Menu from '../screens/Menu';
import User from '../screens/User';
import home from "../assets/home.png";
import homeActive from "../assets/homeActive.png";
import menu from "../assets/menu.png";
import menuActive from "../assets/menuActive.png";
import user from "../assets/user.png";
import userActive from "../assets/userActive.png";
import dot from "../assets/dot.png";
const Tab = createBottomTabNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route}) => ({
            tabBarLabel: (({focused}) => (
                focused ? <Image
                source={dot}
                resizeMode='contain'
                style={{height: 12, width: 12}}
            /> : null
            )),
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === 'Home') {
                    iconName = focused ? homeActive : home;
                } else if (rn === 'Menu') {
                    iconName = focused ? menuActive : menu;
                } else if (rn === 'User') {
                    iconName = focused ? userActive : user;
                }

                return <Image
                source={iconName}
                resizeMode='contain'
                style={{height: 24, width: 24}}
                />
            } 
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    );
}

export default MyTabs;