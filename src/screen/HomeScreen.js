
import React, { useState, useCallback } from 'react'
import { SafeAreaView,Image,RefreshControl,Pressable,  Button,View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity, Animated, ScrollView, TextInput } from 'react-native';
const baseURL = "https://blood-app-react-native.herokuapp.com/api/users"
import axios from 'axios'
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import Banner from '../components/Banner';
import SearchedUsers from '../components/SearchedUsers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductList from './ProductList';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}








export default function HomeScreen(props) {

  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
 

  useFocusEffect(
    useCallback(() => {
      setFocus(false);

      axios
        .get(`${baseURL}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          console.log("Api call error");
        });

     

      return () => {
        setProducts([]);
        setProductsFiltered([]);
        setFocus();
      };
    }, [])
  );



  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.blood.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };



  
  return (
    <ScrollView
      
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    
    >
           <View style={styles.containerSeach}>
              <View
               style={
                focus
                  ? styles.searchBar__clicked
                  : styles.searchBar__unclicked
                }
              >
                <Ionicons 
                  name="search-outline"
                  size={20}
                  color="black"
                  style={{ marginLeft: 1 }}
                />
                <TextInput 
                  style={styles.input}
                  placeholder="Search Blood-Group "
                  onFocus={openList}
                  onChangeText={(text) => searchProduct(text)}
                />
                {focus == true ? (
                  <Ionicons onPress={onBlur} name="close-outline"  size={20} color="black"/>
                ) : null}
              </View>
           </View>

           {focus == true ? (
            <SearchedUsers 
             productsFiltered={productsFiltered}
            />
           ) : (
            <SafeAreaView style={styles.container}>
            
              <View>
                <Banner />
              </View>
              < FlatList
                data={products}
                renderItem={({item, index}) => <ProductList 
                key={item.id} 
                item={item} 
                />}
                keyExtractor={(item, index) => String(index)}
                
              />
            </SafeAreaView>
           )}
          
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 8,
  },
  
  containerSeach: {
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    
  },
  searchBar__unclicked: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  
});