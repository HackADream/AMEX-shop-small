import React from 'react';
import {BottomNavigationTab, Divider, Icon} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { BrandBottomNavigation } from '../../components/brand-bottom-navigation.component';

export const HomeBottomNavigation = (props): React.ReactElement => {

    const onSelect = (index: number): void => {
        props.navigation.navigate(props.state.routeNames[index]);
    };

    const LayoutIcon = (props) => (
        <Icon name='facebook' {...props} />
    );

    return (
        <SafeAreaLayout insets='bottom'>
            <Divider/>
            <BrandBottomNavigation
                appearance='noIndicator'
                selectedIndex={props.state.index}
                onSelect={onSelect}>
                <BottomNavigationTab
                    title='Layouts'
                    icon={LayoutIcon}
                />
                <BottomNavigationTab
                    title='Components'
                    icon={LayoutIcon}
                />
                <BottomNavigationTab
                    title='Themes'
                    icon={LayoutIcon}
                />
            </BrandBottomNavigation>
        </SafeAreaLayout>
    );
};