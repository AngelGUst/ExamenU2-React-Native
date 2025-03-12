import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen'; 

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FeedScreen" 
                component={FeedScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProfileScreen" 
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}