import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "./components/colorCounter";


const SquarScreen = () => {
    return (
        <View>
            <Text>RED</Text>
            <ColorCounter color="red"/>
            <ColorCounter color="yellow "/>
            <ColorCounter color="wight"/>
            <ColorCounter color="black"/>
            <ColorCounter color="boring"/>
        </View>
    );
};
const styles = StyleSheet.create({});
export default SquarScreen;





