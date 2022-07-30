import React, { useEffect, useContext, useState } from "react";
import { View,  StyleSheet, ScrollView, Alert ,SafeAreaView, TouchableOpacity} from "react-native";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";
import LottieView from 'lottie-react-native';
import {useNetInfo,  NetInfoState} from "@react-native-community/netinfo";
import AuthGlobal from "../../Context/store/AuthGlobal";
import { loginUser } from "../../Context/actions/Auth.actions";
import {  Button, Text,TextInput } from 'react-native-paper';
// import { TextInput } from 'react-native-paper';

const Login = (props) => {
  const internetState = useNetInfo();
    const context = useContext(AuthGlobal);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
      if (context.stateUser.isAuthenticated === true) {
        props.navigation.navigate("drawer");
        Alert.alert("Login Success")
      }
      if (internetState.isConnected === false) {
        Alert.alert(
          "No Internet! ❌",
          "Sorry, we need an Internet connection...",
          [{ text: "Okay" }]
        );
      }
    }, [context.stateUser.isAuthenticated, internetState.isConnected]);

   
    const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError("Please fill in your credentials");
    } else {
      loginUser(user, context.dispatch);
    }
  };

    return (
      <ScrollView style={styles.mainContainer}>
             
             <View style={styles.main}>
                 <LottieView 
                      style={styles.lottieConatinerFirst}
                      source={require('../../assets/lottie/42618-welcome.json')}
                      autoPlay
                    />
              </View>
              <View style={styles.mainContainerTwo}>
                  <View  style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#0000A5", }} />
                      <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75,  marginVertical: -60,}}>
                          <SafeAreaView style={styles.container}>
                              <LottieView 
                                style={styles.lottieConatiner}
                                source={require('../../assets/lottie/79717-blood-drop.json')}
                                autoPlay
                              />
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Enter Email"}
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Enter Password"}
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                />

                                <View style={styles.buttonGroup}>
                                  {error ? <Error message={error} /> : null}
                                  <TouchableOpacity>
                                    <Button style={styles.submit}  mode="contained" onPress={() => handleSubmit()}>Login</Button>
                                  </TouchableOpacity>
                                </View>
                            </SafeAreaView>  
                              <View style={[{ marginTop: 20 }, styles.buttonGroup]}>
                                <Text style={styles.middleText}>Don't have an account yet?</Text>
                                <TouchableOpacity
                                  onPress={() => props.navigation.navigate("SignUp")}
                                >
                                  <Button  
                                    style={styles.register} 
                                    mode="contained"
                                  >Register</Button>
                                </TouchableOpacity>
                              </View>
                          
                      </View>
                 
            </View>
          
        </ScrollView>    
    )
}


const styles = StyleSheet.create({
  mainContainer:{
   flex: 1,
   backgroundColor: "white"
  },
  mainContainerTwo:{
   flex: 1,
   height: 450,

  },
  buttonGroup: {
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 60,
    padding: 10
    
  },
  main: {
    height: 400,
    backgroundColor: "#0000A5",
    borderBottomRightRadius: 70,
  },
 
  submit: {
    marginTop: 10,
    marginLeft: 90,
    marginRight: 20,
    
  },
  // image: {
  //   width:100,
  //   height: 100,
  //   borderRadius: 30, 
  // }
  lottieConatiner: {
    resizeMode: "cover",
    height: 135,
    width: 135,
    marginLeft: 55,
    marginBottom: -25
  },
  lottieConatinerFirst: {
    resizeMode: "cover",
    height: 300,
    width: 300,
  },
  input: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    height: 25,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 6.84,

    elevation: 5,
    
  },
  container: {
    marginTop: 50,
    margin: 20
  },
  register: {
    
    marginLeft: 90,
    marginRight: 20,
    paddingHorizontal: 30,
  }
});

export default Login
