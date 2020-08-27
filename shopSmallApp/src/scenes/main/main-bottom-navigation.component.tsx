import React from 'react';
import {BottomNavigationTab, Divider, Icon} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { BrandBottomNavigation } from '../../components/brand-bottom-navigation.component';

export const MainBottomNavigation = (props): React.ReactElement => {

    const onSelect = (index: number): void => {
        props.navigation.navigate(props.state.routeNames[index]);
    };

    const HomeIcon = (props) => (
        <Icon name='grid' {...props} />
    );

    const ExploreIcon = (props) => (
        <Icon name='map' {...props} />
    );

    const YouIcon = (props) => (
        <Icon name='person' {...props} />
    );

    return (
        <SafeAreaLayout insets='bottom'>
            <Divider/>
            <BrandBottomNavigation
                appearance='noIndicator'
                selectedIndex={props.state.index}
                onSelect={onSelect}>
                <BottomNavigationTab
                    title='Home'
                    icon={HomeIcon}
                />
                <BottomNavigationTab
                    title='Explore'
                    icon={ExploreIcon}
                />
                <BottomNavigationTab
                    title='You'
                    icon={YouIcon}
                />
            </BrandBottomNavigation>
        </SafeAreaLayout>
    );
};