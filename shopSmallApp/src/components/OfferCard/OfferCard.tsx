
import React from "react";
import PropTypes from "prop-types";
import {StyleProp, Text, View, ViewStyle} from "react-native";
import Ripple from "react-native-material-ripple";
import TextContainer from "./components/TextContainer";
import IconContainer from "./components/IconContainer";
import styles, {
    container,
    _shadowStyle,
    topRightTextStyle,
    bottomRightTextStyle
} from "./styles/Card.style";
import colors from "./styles/colors.style";

const OfferCard = (props) => {
    const {
        style,
        onPress,
        iconDisable,
        shadowStyle,
        topRightText,
        borderRadius,
        topRightColor,
        topRightStyle,
        bottomRightText,
        containerHeight,
        bottomRightStyle,
        bottomRightColor,
        topRightFontSize,
        topRightComponent,
        bottomRightFontSize,
        bottomRightComponent
    } = props;

    return (
        <View style={[shadowStyle || _shadowStyle]}>
            <Ripple
                style={style || container(containerHeight, iconDisable, borderRadius)}
                onPress={onPress}
                rippleColor={colors.theme.light.primary}
                rippleContainerBorderRadius={borderRadius}
            >
                <View style={styles.contentContainer}>
                    <IconContainer {...props} />
                    <TextContainer {...props} />
                    {topRightComponent || (
                        <View style={styles.topRightContainer as StyleProp<ViewStyle>}>
                            <Text
                                style={
                                    topRightStyle ||
                                    topRightTextStyle(topRightFontSize, topRightColor)
                                }
                            >
                                {topRightText}
                            </Text>
                        </View>
                    )}
                    {bottomRightComponent || (
                        <View style={styles.bottomRightContainer as StyleProp<ViewStyle>}>
                            <Text
                                style={
                                    bottomRightStyle ||
                                    bottomRightTextStyle(bottomRightFontSize, bottomRightColor)
                                }
                            >
                                {bottomRightText}
                            </Text>
                        </View>
                    )}
                </View>
            </Ripple>
        </View>
    );
};

OfferCard.propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func,
    shadowStyle: PropTypes.object,
    rightTopText: PropTypes.string,
    borderRadius: PropTypes.number,
    containerHeight: PropTypes.number,
    rightBottomText: PropTypes.string
};

OfferCard.defaultProps = {
    style: null,
    rightTopText: "",
    borderRadius: 15,
    onPress: () => {},
    rightBottomText: "",
    containerHeight: 100,
    shadowStyle: _shadowStyle
};

export default OfferCard;