import React from 'react';
import { StyleSheet } from 'react-native';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';

export const HomeScreen = (props): React.ReactElement => {
    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets='top'>
            <TopNavigation
                title='Kitten Tricks'
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});