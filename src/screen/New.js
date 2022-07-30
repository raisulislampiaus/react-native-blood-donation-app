import { View, Text,ScrollView , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function New(props) {
  return (
    <ScrollView  style={styles.mainContainer}>
        <View style={styles.main}>
                  <LottieView 
                        style={styles.lottieConatinerFirst}
                        source={require('../../assets/lottie/108419-donate-blood-safe-life.json')}
                        autoPlay
                      />
                
        </View>
        <View style={styles.mainContainerTwo}>
                      <View  style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#0000A5", }} />
                      <View style={{ flex: 1, backgroundColor: "#000", borderTopLeftRadius: 70,   marginVertical: -60,}}> 
                                <TouchableOpacity style={styles.iconContainer}  onPress={() => props.navigation.navigate("Login")}>
                                  <MaterialIcons  style={styles.icon}  name="east" size={25} />
                                </TouchableOpacity> 
                      </View>
          </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  mainContainer:{
   flex: 1,
   backgroundColor: "white"
  },
  mainContainerTwo:{
   flex: 1,
   height: 440,

  },
  
  main: {
    height: 400,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 70,
  },
 
  lottieConatinerFirst: {
    resizeMode: "cover",
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    backgroundColor: "red",
    borderRadius: 100,
    height: 50,
    width: 150,
    marginLeft: 125
  },
  icon: {
    color: "#fff",
  }
});