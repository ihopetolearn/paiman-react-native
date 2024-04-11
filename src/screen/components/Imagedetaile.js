import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetaile = props => {
    return(
    <View>
        <Image source={props.imageSource} />
        <Text > score - {props.source}</Text>
        
        <Text>{props.karim}</Text>
    </View>
    );
};
const styles = StyleSheet.create({});
export default ImageDetaile;