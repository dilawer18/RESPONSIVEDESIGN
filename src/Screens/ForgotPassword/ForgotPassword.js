//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const ForgotPasword = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>ForgotPasword</Text>
            <Button
                title='GoBack'
                onPress={() => { navigation.goBack() }}
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

//make this component available to the app
export default ForgotPasword;
