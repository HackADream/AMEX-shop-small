import React from 'react';
import CardWallet from "./wallet/CardWallet";
import {SafeAreaLayout} from "../../components/safe-area-layout.component";
import {StyleSheet, View} from "react-native";

export const CardScreen = ({ navigation }): React.ReactElement => {

    return (
        <View style={styles.container}>
            <CardWallet/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffffff",
    },
});