import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, RecentTelent } from '../../../screens';
import { routes } from '../../constants';

const App = createNativeStackNavigator();

const AppStack = () => {
    return (
        <App.Navigator
            screenOptions={{ headerShown: false }}>
            <App.Screen name={routes.home} component={Home} />
            <App.Screen name={routes.recentTelent} component={RecentTelent} />
        </App.Navigator>
    )
}
export default AppStack