import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { useSharedValue } from "react-native-reanimated";

const TextScreen = () => {
    const [pasword, setPassword] = useState('');

    return (
        <View>
            <Text>enter your name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="true"
                autoCorrect={false}
                value={pasword}
                onChangeText={(value) => setPassword(value)} // Update name state with the input value
            />
            {pasword.length < 8 ? <Text>you password mus be more than 8</Text>:<Text>you are ok</Text>}
        </View>
        
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderColor: "red",
        borderWidth: 4
    }
});

export default TextScreen;