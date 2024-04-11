import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'today is the aca test ',age:'20',ph:'123' },
        { name: 'frist steps get the food',age:'21',ph:'23543' },
        { name: 'go to your class ',age:'22' },
        { name: 'ask the teester for help',age:'23' },
        { name: 'be quite and enjoy the test ',age:'24' },
        { name: 'long houre you are there ',age:'25' },
        { name: 'tester will collect the forms ',age:'26' },
        { name: 'friend#30',age:'27' },
        { name: 'friend#20',age:'28' },


    ]
    return (
        <FlatList
        
        data={friends}
        renderItem={({item})=>{
            return<Text style={styles.abs}>{item.name}-age{item.age} phone {item.ph}</Text>

        }
    }
        />
    )



};

const styles = StyleSheet.create({
    abs:{
        marginVertical:20
    }
});
export default ListScreen;