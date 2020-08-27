
import React from 'react';
import { RouteProp } from '@react-navigation/core';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainBottomNavigation } from '../scenes/main/main-bottom-navigation.component';
import { HomeNavigator } from "./home.navigator";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const initialTabRoute: string = 'Home';

const ROOT_ROUTES: string[] = ['Main', 'Home', 'Explore', 'You'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
    return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }) => {
    const currentRoute = route.state && route.state.routes[route.state.index];
    return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

const MainTabsNavigator = (): React.ReactElement => (
    <BottomTab.Navigator
        screenOptions={TabBarVisibleOnRootScreenOptions}
        initialRouteName={initialTabRoute}
        tabBar={props => <MainBottomNavigation {...props} />}>
        <BottomTab.Screen name='Home' component={HomeNavigator}/>
        <BottomTab.Screen name='Explore' component={HomeNavigator}/>
        <BottomTab.Screen name='You' component={HomeNavigator}/>
    </BottomTab.Navigator>
);

export const MainNavigator = (): React.ReactElement => (
    <Drawer.Navigator
        screenOptions={{ gestureEnabled: false }}>
        <Drawer.Screen name='Main' component={MainTabsNavigator}/>
    </Drawer.Navigator>
);