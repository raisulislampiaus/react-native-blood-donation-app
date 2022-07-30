import { SafeAreaView, StyleSheet,  TouchableOpacity, Text,  View ,Alert, ScrollView, Image} from "react-native";
import React, {useState, useEffect} from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { TextInput, Button, } from 'react-native-paper';

const options ={
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
    
  },
}



// const imagebg = 'https://images.pexels.com/photos/414648/pexels-photo-414648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const RegisterScreen = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState("");
    const [blood, setBlood] = useState("");
    const [address, setAddress] = useState("");
    const [modal,setModal] = useState(false)
   
    const submitData = ()=>{
        fetch("https://blood-app-react-native.herokuapp.com/api/users",{
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              
                name,
                email,
                password,
                phone,
                picture,
                blood,
                address
            })
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`${data.name} is saved successfuly`)
            props.navigation.navigate("Login");
            
        })
        .catch(err=>{
          Alert.alert("someting went wrong")
      })
    }



    const openGallery = async()=>{
      const images = await launchImageLibrary(options)
      console.log(images.assets[0])
      const formdata = new FormData();
      formdata.append('file', {
        uri:images.assets[0].uri,
        type:images.assets[0].type,
        name:images.assets[0].fileName,
      })
      formdata.append('upload_preset','nativeApp')
      formdata.append("cloud_name","piaus")
    
      fetch("https://api.cloudinary.com/v1_1/piaus/image/upload",{
            method:"post",
            body:formdata
        }).then(res=>res.json()).
        then(data=>{
            setPicture(data.url)
            setModal(false)
        }).catch(err=>{
            Alert.alert("error while uploading")
        })
    }
  
  return (
    <ScrollView style={styles.mainOne}>
         {/* <Image 
            source={{uri: imagebg}}
            style={StyleSheet.absoluteFillObject}
         /> */}
         <View style={styles.main}>
            <Text style={styles.textOne}>Welcome To</Text>
            <Text  style={styles.textTwo}>SignUp</Text>
            <Text  style={styles.textThree}>Create Account</Text>
         </View>
        <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}
       >
          <SafeAreaView style={styles.container}>
            <TextInput
              placeholder={"Enter Name"}
              style={styles.input}
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <TextInput
              placeholder={"Enter Email"}
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder={"Enter Password"}
              
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPhone(text)}
              value={phone}
              placeholder={"Enter Phone Number"}
              
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setBlood(text)}
              value={blood}
              placeholder={"Enter Blood Group"}
              
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setAddress(text)}
              value={address}
              placeholder={"Enter You'r Current Address"}
            
            
            />
            <View style={styles.upload}>
              <Button
                mode="contained"
                onPress={openGallery}
                onChangeText={(text) => setPicture(text)}
                value={picture}
              >
                upload You'r picture
              </Button>
            </View>
            <View style={styles.submit}>
            <Button mode="contained"  onPress={() => submitData()}>Submit</Button>
            </View>
            
          </SafeAreaView>
        </KeyboardAwareScrollView>
          <View style={styles.login}>
            <Text style={styles.TextFive}>Already have a Account ?</Text>
            <Button mode="contained" onPress={() => props.navigation.navigate("Login")} >Login</Button>
          </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    mainOne: {
      backgroundColor: "#fff",
      color: "#000",
      opacity: 0.7,
    
    },
    main: {
      marginTop: 30,
      marginHorizontal: 20,
    },
    textOne: {
      fontSize: 40,
      fontWeight: "bold",
      color: "blue"
    },
    textTwo: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 5,
      color: 'blue'
    },
    textThree: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#000"
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 30,
      marginHorizontal: 20,
      backgroundColor: "#fff",
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.75,
      shadowRadius: 6.84,

      elevation: 5,
      
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
    upload: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      paddingHorizontal: 10,
      
     
    },
    submit: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      paddingHorizontal: 10,
    },
    login: {
      marginBottom: 10,
      
      
    },
    TextFive:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#000",
      marginHorizontal: 80,
      padding: 10,
    }
  });

export default RegisterScreen