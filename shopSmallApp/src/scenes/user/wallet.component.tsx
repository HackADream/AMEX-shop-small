import React from 'react';
import {Icon, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {SafeAreaLayout} from "../../components/safe-area-layout.component";
import {StyleSheet, View} from "react-native";
import Wallet from "./wallet/Wallet";

const WalletScreen = ({navigation}): React.ReactElement => {
    const BackIcon = (props) => (
        <Icon name='arrow-ios-back' {...props} />
    );

    const renderBackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={navigation.goBack}
        />
    );

    return (
        <SafeAreaLayout
            style={styles.container}
            insets='top'
        >
            <TopNavigation
                title={"Wallet"}
                accessoryLeft={renderBackAction}
            />

            <Wallet/>

        </SafeAreaLayout>
    );
};

export default WalletScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#ffffffff",
        flex: 1,
    },
});