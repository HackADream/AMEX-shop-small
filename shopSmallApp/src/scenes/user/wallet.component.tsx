import React from 'react';
import {Divider, Icon, Tab, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {SafeAreaLayout} from "../../components/safe-area-layout.component";
import {StyleSheet, View} from "react-native";
import Wallet from "./wallet/Wallet";
import {BrandTabBar} from "../../components/brand-tab-bar.component";

const WalletScreen = ({navigation, state}): React.ReactElement => {
    const BackIcon = (props) => (
        <Icon name='arrow-ios-back' {...props} />
    );

    const renderBackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={navigation.goBack}
        />
    );

    const GridIcon = (props) => (
        <Icon name='arrow-ios-back' {...props} />
    );

    const ListIcon = (props) => (
        <Icon name='arrow-ios-back' {...props} />
    );

    const onTabSelect = (index: number): void => {
        navigation.navigate(state.routeNames[index]);
    };

    return (
        <SafeAreaLayout
            insets='top'
            style={styles.container}
        >
            <TopNavigation
                title={"Wallet"}
                accessoryLeft={renderBackAction}
            />
            <BrandTabBar
                selectedIndex={state.index}
                onSelect={onTabSelect}>
                <Tab icon={GridIcon}/>
                <Tab icon={ListIcon}/>
            </BrandTabBar>

        </SafeAreaLayout>
    );
};

export default WalletScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#ffffffff",
    },
});