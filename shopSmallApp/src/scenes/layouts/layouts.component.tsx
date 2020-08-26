import React from 'react';
import { StyleSheet } from 'react-native';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';

export const LayoutsScreen = (props): React.ReactElement => {

    const MenuIcon = (props) => (
        <Icon name='facebook' {...props} />
    );

    const renderDrawerAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={props.navigation.toggleDrawer}
        />
    );

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets='top'>
            <TopNavigation
                title='Kitten Tricks'
                leftControl={renderDrawerAction()}
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});