
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import Icon from "react-native-vector-icons/FontAwesome";

import UserProfile from './UserProfile';





const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarStyle: {backgroundColor: '#fff', marginBottom: 10, borderRadius: 18, margin: 8, },
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: {
          fontSize: 18,
        },
        
      }}
    
    >
        <Tab.Screen 
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons  name="home" color={color} size={size} />
             ),
          }} 
          name="HomeScreen" component={HomeScreen} 
         />
        
        <Tab.Screen 
           options={{
              tabBarLabel: 'profile',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Icon  name="user" color={color} size={size} />
              ),
            }} 
           name="profile" 
           component={UserProfile} 
        />
    </Tab.Navigator>
  )
}