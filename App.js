import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import Home from './src/screen/Home';
import MyDrawer from './src/screen/MyDrawer';

import Auth from "./Context/store/Auth";
import { LogBox } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import store from "./src/store";
import RegisterScreen from './src/screen/RegisterScreen';
import Home from './src/screen/Home';
import Login from './src/screen/Login';

import { NativeBaseProvider } from "native-base";
import SingleUser from './src/screen/SingleUser';
import New from './src/screen/New';

LogBox.ignoreAllLogs(true);


const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen options={{headerShown: false}} name="new" component={New} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name="SignUp" component={RegisterScreen} />
      <Stack.Screen options={{headerShown: false}} name="drawer" component={MyDrawer} />
      <Stack.Screen  name="Details" component={SingleUser} />
      
    </Stack.Navigator>
  );
}

const RootNavigation = () => {
  return(
    <Auth>
      <Provider store={store}>
          <NativeBaseProvider>
            <NavigationContainer >
              <MyStack />
              
            </NavigationContainer>
          </NativeBaseProvider>
        </Provider>
   </Auth>
  )
}

export default function App() {
  return (
    <RootNavigation />
  );
}


