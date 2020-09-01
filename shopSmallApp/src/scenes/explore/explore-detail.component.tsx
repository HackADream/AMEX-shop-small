import {StyleSheet, Text} from "react-native";
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import React from "react";
import {Icon, TopNavigation, TopNavigationAction} from "@ui-kitten/components";

const CardItemDetailScreen = ({navigation, route}) => {

    const data = route.params.markerData;

    const BackIcon = (props) => (
        <Icon name='arrow-ios-back' {...props} />
    );


    const renderBackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={navigation.goBack}
        />
    );

    return(
        <SafeAreaLayout
            style={styles.safeArea}
            insets='top'
        >
            <TopNavigation
                title={data.title}
                leftControl={renderBackAction()}
            />
            <Text>CarItemDetails</Text>
        </SafeAreaLayout>
    );
};

export default CardItemDetailScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
    },
});