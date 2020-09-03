import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ExploreScreen} from "../scenes/layouts/explore.component";
import CardItemDetailScreen from "../scenes/explore/explore-detail.component";

const Stack = createStackNavigator();

export const ExploreNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Explore' component={ExploreScreen}/>
        <Stack.Screen
            name='CardItemDetail'
            component={CardItemDetailScreen}
            options={({route}) => ({
                // title: route.params.title,
                headerBackTitleVisible: false,
            })}
        />
    </Stack.Navigator>
);