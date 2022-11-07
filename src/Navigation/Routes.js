import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthStack from './AuthStack';
// import * as Screens from '../Screens';

const Stack = createNativeStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
            {AuthStack()}
        </NavigationContainer>
    )
}

export default Routes