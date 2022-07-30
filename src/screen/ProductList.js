import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ProductCard from "./ProductCard";

var { width } = Dimensions.get("window");

const ProductList = (props) => {
  const { item } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    
      onPress={() => 
            navigation.navigate("Details", { item: item})
        }
    >
      <View >
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
