import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Login from "./screen/Login";
import RegisterScreen from "./screen/RegisterScreen";
import New from "./screen/New";

// import Login from '../Screens/User/Login'
// import Register from '../Screens/User/Register'
// import UserProfile from '../Screens/User/UserProfile'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen 
                name="SignUp"
                component={RegisterScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="new"
                component={New}
                options={{
                    headerShown: false
                }}
            />
         </Stack.Navigator>
    )
}

export default function UserNavigator() {
    return <MyStack />
}