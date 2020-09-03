import {Image, View, Text} from "react-native";
import React from "react";
import {StyleService, useStyleSheet} from "@ui-kitten/components";

export const OfferBanner = (props) :React.ReactElement => {
    const styles = useStyleSheet(themedStyles);
    return (
        <View style={styles.slide}>
            <Text>{props.image}</Text>
        </View>
    );
};

const themedStyles = StyleService.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
});