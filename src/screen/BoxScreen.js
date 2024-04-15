import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewstlye}>
            <Text style={styles.textstyle1}>child#1</Text>
            <Text style={styles.textstyle2}>child#2</Text>
            <Text style={styles.textstyle3}>child#3</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    viewstlye: {
        borderColor: "green",
        borderWidth: 3,
        height: 300,
        felx:100
        

    },
    textstyle1: {
        borderColor: "black",
        borderWidth: 2,
        flex:2

    },
    textstyle2: {
        borderColor: "black",
        borderWidth: 2,
        flex:1
    },
    textstyle3: {
        borderColor: "black",
        borderWidth: 2,
        flex:2
    },
});
export default BoxScreen;