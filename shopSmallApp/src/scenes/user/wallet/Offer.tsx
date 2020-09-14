import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    SafeAreaView,
    Dimensions, PanResponder
} from "react-native";

const cardHeight = 250;
const cardTitle = 45;
const cardPadding = 10;

const { height } = Dimensions.get("window");
const cards = [
    {
        name: "Shot",
        color: "#a9d0b6",
        price: "30 CHF"
    },
    {
        name: "Juice",
        color: "#e9bbd1",
        price: "64 CHF"
    },
    {
        name: "Mighty Juice",
        color: "#eba65c",
        price: "80 CHF"
    },
    {
        name: "Sandwich",
        color: "#95c3e4",
        price: "85 CHF"
    },
    {
        name: "Combi",
        color: "#1c1c1c",
        price: "145 CHF"
    },
    {
        name: "Signature",
        color: "#a390bc",
        price: "92 CHF"
    },
    {
        name: "Coffee",
        color: "#fef2a0",
        price: "47 CHF"
    }
];

export default class OfferWallet extends React.Component {
    state = {
        y: new Animated.Value(0)
    };

    panResponder;

    constructor(props) {
        super(props);

        const { y } = this.state;

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gestureState) => {
                y.setValue(-1 * gestureState.dy);
                console.log(y);
            },
            onPanResponderRelease: () => {
                Animated.timing(y, {
                    duration: 100,
                    toValue: 0,
                    useNativeDriver: true
                }).start();
            }
        });
    }


    render() {
        const { y } = this.state;
        return (
            <SafeAreaView style={styles.root}>
                <View style={styles.container} {...this.panResponder.panHandlers}>
                    <View style={StyleSheet.absoluteFill}>
                        {cards.map((card, i) => {
                            const translateY = y.interpolate({
                                inputRange: [-(cardHeight * 10), 0, 5 * cardPadding],
                                outputRange: [
                                    cardHeight * 10 * (i / 1.5),
                                    (cardHeight - cardTitle) * -i,
                                    (cardHeight - cardPadding) * -i
                                ],
                                extrapolateRight: "clamp"
                            });
                            return (
                                <Animated.View
                                    key={card.name}
                                    style={{ transform: [{ translateY }] }}
                                >
                                    <View
                                        style={[styles.card, { backgroundColor: card.color }]}
                                    />
                                </Animated.View>
                            );
                        })}
                    </View>
                    <Animated.ScrollView
                        scrollEventThrottle={16}
                        contentContainerStyle={styles.content}
                        showsVerticalScrollIndicator={false}
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent: {
                                        contentOffset: { y }
                                    }
                                }
                            ],
                            { useNativeDriver: true }
                        )}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 16
    },
    container: {
        flex: 1
    },
    content: {
        height: height * 2
    },
    card: {
        height: cardHeight,
        borderRadius: 10
    }
});