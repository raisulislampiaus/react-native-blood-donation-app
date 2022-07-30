import React, { useState, useEffect } from 'react'
import { Image, View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from "react-native-vector-icons/Fontisto";
var { width } = Dimensions.get("window");
const SingleUser = (props) => {
    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState(null);

    return (
        
        <ScrollView style={{ backgroundColor: "#fff", flex: 1,}}>
            
            <View style={styles.contentContainer}>
                <View></View>
                    <Image  style={styles.image}
                        source={{ uri: item.picture ? 
                            item.picture : 'https://github.com/raisulislampiaus/raisulislampiaus/blob/main/Avatar-PNG-Free-Download.png?raw=true' 
                        }}
                    />
                
                
            </View>
            <View style={styles.text}>
                    <View style={styles.nameIcon}> 
                     <Ionicons style={{ color: "#000",  marginLeft: 30}}  name="person-add-outline" size={25} />
                      <Text style={styles.contentTextName}>Name:{item.name}</Text>
                      
                    </View>
                    <View style={styles.nameIcon}> 
                     <Ionicons style={{ color: "#000", marginLeft: 30}}  name="mail-outline" size={25} />
                      <Text style={styles.contentTextName}>Email:{item.email}</Text>
                      
                    </View>
                    <View style={styles.nameIcon}> 
                      <Fontisto style={{ color: "#000",  marginLeft: 35}}  name="blood-drop" size={25} />
                      <Text style={styles.contentTextName}>Blood:{item.blood}</Text>
                    </View>
                    <View style={styles.nameIcon}> 
                     <MaterialIcons style={{ color: "#000", marginLeft: 30}}  name="roofing" size={25} />
                      <Text style={styles.contentTextName}>Address:{item.address}</Text>
                    </View>
                    <View style={styles.nameIcon}> 
                     <Ionicons style={{ color: "#000",  marginLeft: 30}}  name="call-outline" size={25} />
                      <Text style={styles.contentTextName}>Phone:{item.phone}</Text>
                    </View>
                    
            </View>
           
        </ScrollView>
               
    )

}





const styles = StyleSheet.create({
   
    image: {
        resizeMode: "cover",
        width: 200,
        height: 200,
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
    text: {
        width: 330,
        marginTop: 120,
        
    },
   
    nameIcon: {
        flexDirection: "row",
        margin: 10,
    },
    contentTextName: {
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 8,
        color: "#000",
        
    }
})

export default SingleUser;