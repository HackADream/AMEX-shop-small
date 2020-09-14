import React from 'react';
import {StyleSheet, View} from "react-native";
import OfferWallet from "./wallet/Offer";

export const OfferScreen = ({ navigation }): React.ReactElement => {

    return (
        <View style={styles.container}>
            <OfferWallet/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffffff",
        ...StyleSheet.absoluteFillObject,
    },
});