import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    
    Pressable
} from 'react-native'

import { useNavigation } from '@react-navigation/native';


const ProductCard = (props) => {
    const { name, picture,blood,email} = props;
    const navigation = useNavigation();
    return (
        <>
               < View style={styles.item}>
                   <Image style={styles.image}
                        source={{ uri: picture ? 
                         picture : 'https://github.com/raisulislampiaus/raisulislampiaus/blob/main/Avatar-PNG-Free-Download.png?raw=true' 
                       }}
                     />
                 <View style={styles.cardText}>
                   <Text style={styles.name}>Name: 
                    {name.length > 15 ? name.substring(0, 15 - 3)
                        + '...' : name
                     }
                   </Text>
                   <Text style={styles.blood}>(Blood):  
                    {blood.length > 15 ? blood.substring(0, 15 - 3)
                        + '...' : blood
                     }
                   </Text>
                  
                   <Text style={styles.email}>Email: 
                    {email.length > 15 ? email.substring(0, 15 - 3)
                        + '...' : email
                     }
                   </Text>
                     <View  style={styles.button} >
                       <Text style={styles.text}>View More</Text>
                     </View>
                  
                 </View>
                
               </ View>
               
             </>
    )
}


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset:{
          width: 0,
          height: 10,
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        padding: 20,
        marginVertical: 8,
      },
      name: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000",
        opacity: .8
      },
      image:{
        width:100,
        height: 110,
        borderRadius: 20,
        
      },
      cardText: {
        flexDirection: 'column',
        marginLeft: 10,
        fontWeight: "bold",
      },
      blood: {
        fontSize: 18,
        fontWeight: "800",
        color: "red",
        opacity: .7,
      },
      email: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#0099cc",
        opacity: .8,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 10,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})

export default ProductCard;
