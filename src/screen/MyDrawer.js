import * as React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators
} from '@react-navigation/drawer';
import Home from './Home';

import UserProfile from './UserProfile';
import Admin from './Admin';

import {
  Easing,
  
} from 'react-native';






const Drawer = createDrawerNavigator();



export default function MyDrawer() {
  
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#0000A5",
        drawerInactiveTintColor: "#000",
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
        
      }}
      
      
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons  name="home" color={color} size={size} />
           ),
           
        }} 
        name="Home" component={Home} 
      />
      
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon  name="user" color={color} size={size} />
           ),
        }} 
       name="profile" component={UserProfile} 
      />
      <Drawer.Screen 
       options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons  name="person-add-sharp" color={color} size={size} />
         ),
       }}
       name="Admin" component={Admin} 
      />
      
    </Drawer.Navigator>
  );
}
