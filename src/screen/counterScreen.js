import React, { useState } from "react";
import { Text,StyleSheet,View, Button } from "react-native";

const counterScreen =()=>{
    const [counter,setCounter ] =useState(0);
    return(
        <View>
            
            <Button title="Increase" onPress={()=>{
                setCounter(counter+1);
            }}/>
            <Button title="Decrease" onPress={()=>{
                setCounter(counter -1);
                }}/>
            <Text>this is counter{counter}</Text>
        </View>
    );
};
const styles=StyleSheet.create({});
export default counterScreen;