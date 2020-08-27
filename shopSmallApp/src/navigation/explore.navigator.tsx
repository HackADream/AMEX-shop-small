import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ExploreScreen} from "../scenes/layouts/explore.component";

const Stack = createStackNavigator();

export const ExploreNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Explore' component={ExploreScreen}/>
    </Stack.Navigator>
);