import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {UserScreen} from "../scenes/layouts/user.component";

const Stack = createStackNavigator();

export const UserNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='User' component={UserScreen}/>
    </Stack.Navigator>
);