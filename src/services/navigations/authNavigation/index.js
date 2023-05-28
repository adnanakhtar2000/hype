import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EnableNotification, ForgotPassword, Login, PrivacyPolicy, SignUp, TermsAndConditions } from '../../../screens';
import { routes } from '../../constants';
import AppStack from '../appNavigation';

const Auth = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Auth.Navigator
            screenOptions={{ headerShown: false }}>
            <Auth.Screen name={routes.login} component={Login} />
            <Auth.Screen name={routes.signup} component={SignUp} />
            <Auth.Screen name={routes.forgotPassword} component={ForgotPassword} />
            <Auth.Screen name={routes.termsAndConditions} component={TermsAndConditions} />
            <Auth.Screen name={routes.privacyPolicy} component={PrivacyPolicy} />
            <Auth.Screen name={routes.enableNotification} component={EnableNotification} />
            <Auth.Screen name={routes.appStack} component={AppStack} />
        </Auth.Navigator>
    )
}
export default AuthStack