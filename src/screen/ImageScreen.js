import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetaile from "./components/Imagedetaile";


const ImageScreen = () => {
    return (
        <View>
            <ImageDetaile karim="forest" imageSource={require('../../assets/forest.jpg')} source={9}/>
            
            <ImageDetaile karim="moutain" imageSource={require('../../assets/beach.jpg')}  source={10}/>
           
            <ImageDetaile karim="beach" imageSource={require('../../assets/mountain.jpg')} source={12}/>
            
        </View>
    );
};
const styles = StyleSheet.create({});
export default ImageScreen;
