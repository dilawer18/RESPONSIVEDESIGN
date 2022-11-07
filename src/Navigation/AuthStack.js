import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();
import {
    Login,
    Register,
    ChooseAccount,
    ForgotPassword,
    SetPassword,
} from '../Screens'
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
            <Stack.Screen name={navigationStrings.REGISTER} component={Register} />
            <Stack.Screen name={navigationStrings.CHOOSE_ACCOUNT} component={ChooseAccount} />
            <Stack.Screen name={navigationStrings.FORGOT_PASSWORD} component={ForgotPassword} />
            <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} />
        </Stack.Navigator>
    )
}
export default AuthStack