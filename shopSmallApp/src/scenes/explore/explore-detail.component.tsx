import React, {useRef} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform,
} from 'react-native';
import HeaderImageScrollView, {
    TriggeringView,
} from 'react-native-image-header-scroll-view';

import {SafeAreaLayout} from '../../components/safe-area-layout.component';
import * as Animatable from 'react-native-animatable';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import ContentView from "./explore-detail";

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const CardItemDetailScreen = ({navigation, route}): React.ReactElement => {

    const itemData = route.params.markerData;
    const navTitleView = useRef(null);

    const [bookmarked, setBookmarked] = React.useState<boolean>(false);

    const BackIcon = (props) => (
        <Icon name='arrow-ios-back' {...props} />
    );

    const BookmarkIcon = (props) => (
        <Icon name='bookmark' {...props} />
    );

    const BookmarkOutlineIcon = (props) => (
        <Icon name='bookmark-outline' {...props} />
    );

    const onBookmarkActionPress = (): void => {
        setBookmarked(!bookmarked);
    };

    const renderBackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={navigation.goBack}
        />
    );

    const renderBookmarkAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={bookmarked ? BookmarkIcon : BookmarkOutlineIcon}
            onPress={onBookmarkActionPress}
        />
    );

    return (
        <SafeAreaLayout
            style={styles.container}
            insets='top'
        >
            <TopNavigation
                title={itemData.title}
                leftControl={renderBackAction()}
                rightControls={[renderBookmarkAction()]}
            />
            <ContentView data={itemData}/>
        </SafeAreaLayout>
    );
};

export default CardItemDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
    },
    name: {
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    categoryContainer: {
        flexDirection: 'row',
        backgroundColor: '#FF6347',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        paddingHorizontal: 15,
    },
    category: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 5,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    sectionLarge: {
        minHeight: 300,
    },
});