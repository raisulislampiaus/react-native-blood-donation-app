
import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, login, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { useNavigation } from '@react-navigation/native';

const SigninScreen = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  

  useEffect(() => {
    if (userInfo) {
      props.navigation.navigate("SignUp")
    } 
  }, [ userInfo]);

  const submitHandler = (e) => {

    e && e.preventDefault && e.preventDefault();
    dispatch(login(email, password))
    console.log(email, password)
  };


    

    return (
        <FormContainer title={"Login"}>
          
            <Input
                placeholder={"Enter Email"}
                name={"email"}
                id={"email"}
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
            />
            <Input
                placeholder={"Enter Password"}
                name={"password"}
                id={"password"}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            

            <View style={styles.buttonGroup}>
               {error ? <Error message={error} /> : null}
              <Button title="Login" onPress={() => submitHandler()} />
            </View>
            <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
               <Text style={styles.middleText}>Don't have an account yet?</Text>
               <Button title="Register" 
                onPress={() => props.navigation.navigate("SignUp")}
               />
            </View>
        </FormContainer>    
    )
}


const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  },
});


export default SigninScreen