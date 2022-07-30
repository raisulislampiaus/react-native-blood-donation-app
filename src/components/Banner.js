import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'
import {image1} from '../../images/blood-1.png'
var { width } = Dimensions.get("window");

const Banner = () => {
    const [ bannerData, setBannerData ] = useState([]);

    useEffect( () => {
        setBannerData([ "https://github.com/raisulislampiaus/raisulislampiaus/blob/main/blood-1.png?raw=true",
        "https://github.com/raisulislampiaus/raisulislampiaus/blob/main/stestoskop-64276_960_720.jpg?raw=true",
        "https://github.com/raisulislampiaus/raisulislampiaus/blob/main/heart-5724137_960_720.png?raw=true",
        "https://github.com/raisulislampiaus/raisulislampiaus/blob/main/download.png?raw=true", "https://github.com/raisulislampiaus/raisulislampiaus/blob/main/download%20(1).png?raw=true",
        "https://github.com/raisulislampiaus/raisulislampiaus/blob/main/21-214042.png?raw=true"]
        )
        return () => {
            setBannerData([])
        }
    }, [])
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper 
                style={{ height: width / 2 }}
                showButtons={false}
                autoplay={true}
                autoplayTimeout={2}
                >
                {bannerData.map((item) =>{
                    return(
                        <Image 
                        key={item}
                        style={styles.imageBanner}
                        resizeMode="contain"
                        source={{uri: item }}
                        />
                    );
                })}
                </Swiper>
                <View style={{ height: 20}}></View>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner
