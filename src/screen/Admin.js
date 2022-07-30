import { View, Text, Image,  StyleSheet } from 'react-native'
import React from 'react'

const Admin = () => {
  return (
    <View>
      <View style={styles.contentContainer}>
        <Image style={styles.image} source={require('../../images/piaus.png')} />
      </View>
      <View style={styles.contentContainerttwo}>
        <Text style={{ margin: 20, fontSize: 25, fontWeight: "bold", color: "#000", marginHorizontal: 50, }}>Hi' I am Raisul Islam Piaus</Text>
        <Text style={{  fontSize: 15, fontWeight: "bold", color: "red", marginHorizontal: 120, }}> Contact: 01568108873 </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
   
    image: {
            width: 300,
            height: 300,
            marginTop: 20,
            marginHorizontal: 50,
            borderRadius: 15,
            borderRadius: 100,
            marginTop: 200,
    },
    contentContainer: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#000",
      
      height: 200
   
      
  },
  contentContainerttwo:{
    marginTop: 160
  }

  });

export default Admin