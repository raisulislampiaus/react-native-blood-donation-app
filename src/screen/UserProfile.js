import React, { useContext, useState, useCallback, useEffect } from 'react';
import { View, Text, ScrollView,  StyleSheet, Image, Alert } from 'react-native';

import { useFocusEffect } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TextInput, Button, } from 'react-native-paper';
import axios from "axios"

import AuthGlobal from "../../Context/store/AuthGlobal"
import { logoutUser } from "../../Context/actions/Auth.actions"
// import { useEffect } from 'react/cjs/react.development';
const baseURL = "https://blood-app-react-native.herokuapp.com/api/users/"
const UserProfile = (props) => {
    const context = useContext(AuthGlobal)
    const [userProfile, setUserProfile] = useState()
   


    useEffect(() => {
       if (
            context.stateUser.isAuthenticated === false || 
            context.stateUser.isAuthenticated === null
        ) {
            props.navigation.navigate("Login")
        }

        AsyncStorage.getItem("jwt")
            .then((res) => {
              axios.get(`${baseURL}/profile`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${res}`
                },      
            })      
            .then((response) => {
              // console.log('response',response.data)
              setUserProfile(response.data)
      
            })
            .catch((error) => {
              Alert.alert("Logout Success")
      
            })
                    
            })
            .catch((error) => console.log(error))
            return () => {
            setUserProfile();
           }
    }, [context.stateUser.isAuthenticated])

    return (
       
           <ScrollView style={{backgroundColor: '#000', flex: 1}}>
              <View style={styles.subContainer}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}>
                        {userProfile ? userProfile.name : "" }
                    </Text>
                    <View style={{ marginTop: 20 }}>
                            
                            <Text style={{ margin: 10,  fontSize: 20, fontWeight: "bold", color: "#000" }}>
                                Email: {userProfile ? userProfile.email : ""}
                            </Text>
                            <Text style={{ margin: 10, fontSize: 20, fontWeight: "bold", color: "#000" }}>
                                Phone: {userProfile ? userProfile.phone : ""}
                            </Text>
                            <Text style={{ margin: 10, fontSize: 20, fontWeight: "bold", color: "#000" }}>
                                Address: {userProfile ? userProfile.address : ""}
                            </Text>
                            <Text style={{ margin: 10, fontSize: 20, fontWeight: "bold", color: "#000" }}>
                                Blood: {userProfile ? userProfile.blood : ""}
                            </Text>
                            
                            
                    </View>
                    
               </View>
               
               <View style={{ flex: 1, backgroundColor: "#000",  height: 241, borderTopLeftRadius: 70 }}>
                            <Button style={{ marginTop: 200}} mode="contained" onPress={() => [
                                AsyncStorage.removeItem("jwt"),
                                logoutUser(context.dispatch)
                            ]}>Sign Out</Button>
                </View>
           </ScrollView>
       
    )
}

const styles = StyleSheet.create({

    subContainer: {
        alignItems: "center",
        height: 300,
        backgroundColor: "#fff",
        borderBottomRightRadius: 80,
       
        
    },
    order: {
        marginTop: 20,
        alignItems: "center",
        marginBottom: 60
    }
})

export default UserProfile;

