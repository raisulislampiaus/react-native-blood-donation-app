import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper/src'

var { width } = Dimensions.get("window");

const Banner = () => {
    const [ bannerData, setBannerData ] = useState([]);

    useEffect( () => {
        setBannerData([ "https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg",
        "https://cdn.pixabay.com/photo/2014/05/03/00/46/gadgets-336635_960_720.jpg"]
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
