
import React from 'react';
import { RouteProp } from '@react-navigation/core';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
import {LayoutsNavigator} from "./layouts.navigator";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const initialTabRoute: string = 'Layouts';

const ROOT_ROUTES: string[] = ['Home', 'Layouts', 'Components', 'Themes'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
    return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }) => {
    const currentRoute = route.state && route.state.routes[route.state.index];
    return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

const HomeTabsNavigator = (): React.ReactElement => (
    <BottomTab.Navigator
        screenOptions={TabBarVisibleOnRootScreenOptions}
        initialRouteName={initialTabRoute}
        tabBar={props => <HomeBottomNavigation {...props} />}>
        <BottomTab.Screen name='Layouts' component={LayoutsNavigator}/>
        <BottomTab.Screen name='Components' component={LayoutsNavigator}/>
        <BottomTab.Screen name='Themes' component={LayoutsNavigator}/>
    </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
    <Drawer.Navigator
        screenOptions={{ gestureEnabled: false }}>
        <Drawer.Screen name='Home' component={HomeTabsNavigator}/>
    </Drawer.Navigator>
);