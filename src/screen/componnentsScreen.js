import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ScreenComponents = () => {
    const arif = 'everybody is trying to get lifeeasy and how  !';
    return (
        <View>   
            <Text style={styles.textstyle1}>Paiman app</Text>
            <Text style={styles.textstyle2}>Hello there!</Text>
            <Text style={styles.textstyle3}> {arif} </Text>
            </View>
    )
};

const styles = StyleSheet.create({
    textstyle1: {
        fontSize: 40,
        color: 'red',
        backgroundColor: 'purple',
    },
    textstyle2: {
        fontSize: 45,
    },
    textstyle3: {
        fontSize: 20,
    },
});

export default ScreenComponents;