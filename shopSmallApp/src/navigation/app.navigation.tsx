import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './main.navigator';

const navigatorTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        // prevent layout blinking when performing navigation
        background: 'transparent',
    },
};

export const AppNavigator = (): React.ReactElement => (
    <NavigationContainer theme={navigatorTheme}>
        <MainNavigator/>
    </NavigationContainer>
);