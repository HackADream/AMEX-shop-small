import React, {useState} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import {
    diffClamp,
    usePanGestureHandler, withDecay,
    withOffset,
} from "react-native-redash";
import Card, { CARD_HEIGHT, Cards } from "./Card";

const { height } = Dimensions.get("window");
const MARGIN = 16;
const HEIGHT = CARD_HEIGHT + MARGIN * 2;
const cards = [
    {
        type: Cards.Card1,
    },
    {
        type: Cards.Card2,
    },
    {
        type: Cards.Card3,
    },
    {
        type: Cards.Card1,
    },
    {
        type: Cards.Card2,
    },
    {
        type: Cards.Card3,
    },
];
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    card: {
        marginVertical: MARGIN,
    },
});

const Wallet = () => {
    const [containerHeight, setContainerHeight] = useState(height);
    const visibleCards = Math.floor(containerHeight / HEIGHT);
    const { gestureHandler, translation, state, velocity } = usePanGestureHandler();
    const y = diffClamp(
        withOffset(translation.y, state),
        -CARD_HEIGHT * cards.length,
        0
    );
    const translateY = diffClamp(withDecay({
        value: translation.y,
        velocity: velocity.y,
        state,
    }), -HEIGHT * cards.length + visibleCards * HEIGHT, 0);
    return (
        <PanGestureHandler {...gestureHandler}>
            <Animated.View
                style={styles.container}
                onLayout={({nativeEvent: {layout: {
                    height: h
                }}}) => setContainerHeight(h)}
            >
                {cards.map(({ type }, index) => {
                    return (
                        <Animated.View
                            style={[styles.card, { transform: [{ translateY }] }]}
                            key={index}
                        >
                            <Card {...{ type }} />
                        </Animated.View>
                    );
                })}
            </Animated.View>
        </PanGestureHandler>
    );
};

export default Wallet;