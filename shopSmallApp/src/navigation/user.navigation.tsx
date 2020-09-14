import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {UserScreen} from "../scenes/layouts/user.component";
import WalletScreen from "../scenes/user/wallet.component";

const Stack = createStackNavigator();

export const UserNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='User' component={UserScreen}/>
        <Stack.Screen name='Wallet' component={WalletScreen}/>
    </Stack.Navigator>
);