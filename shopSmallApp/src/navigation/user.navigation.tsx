import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {UserScreen} from "../scenes/layouts/user.component";
import WalletScreen from "../scenes/user/wallet.component";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {CardScreen} from "../scenes/user/card-screen.component";
import {OfferScreen} from "../scenes/user/offer-screen.component";

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const WalletNavigator = (): React.ReactElement => (
    <TopTab.Navigator tabBar={(props) => <WalletScreen {...props}/>}>
        <TopTab.Screen name='Cards' component={CardScreen}/>
        <TopTab.Screen name='Offers' component={OfferScreen}/>
    </TopTab.Navigator>
);

export const UserNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='User' component={UserScreen}/>
        <Stack.Screen name='Wallet' component={WalletNavigator}/>
    </Stack.Navigator>
);