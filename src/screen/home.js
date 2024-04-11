import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const Home = props => (
    <View>
        <Text style={styles.homeStyle}>Home is the first page designed by the paiman</Text>
        <Button title="back" onPress={() => props.navigation.navigate('paiman1')}/>
        <Button onPress={() => props.navigation.navigate('paiman3')} title="go to main page" />
        <Button onPress={()=>props.navigation.navigate('paiman4')} title="go to the image"/>
        <Button onPress={()=>props.navigation.navigate('paiman5')} title="go to counter demo"/>
        <TouchableOpacity onPress={() => props.navigation.navigate('paiman2')}>
            <Text> this is the first page  </Text>
            <Text> this is the paiman  </Text>
            <Text> this is the ali phone  </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    homeStyle: {
        fontSize: 40
    }
});

export default Home;