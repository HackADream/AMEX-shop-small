import React from 'react';
import { StyleSheet } from 'react-native';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';

export const ExploreScreen = (props): React.ReactElement => {
    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets='top'>
            <TopNavigation
                title='Explore Page'
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});