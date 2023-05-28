import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, WelcomeScreen } from '../../screens';
import { routes } from '../constants';
import AuthStack from './authNavigation';

const MainStack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{ headerShown: false }}>
                <MainStack.Screen name={routes.splash} component={Splash} />
                <MainStack.Screen name={routes.welcomeScreen} component={WelcomeScreen} />
                <MainStack.Screen name={routes.authStack} component={AuthStack} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation