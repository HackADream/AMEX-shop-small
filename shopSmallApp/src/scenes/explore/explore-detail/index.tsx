import React from 'react';
import {
    Image,
    ImageSourcePropType,
    ImageStyle, Linking,
    ListRenderItemInfo,
    ScrollView,
    View,
} from 'react-native';
import { Button, Card, Icon, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import {Product, ProductOption, ProductPrice} from './extra/contentTypes';
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import Swiper from 'react-native-swiper';

const product: Product = Product.centralParkApartment();

export default (props): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    const onBookButtonPress = (): void => {
        const url = "google.navigation:q=" +props.data.coordinate.latitude+ "+" + props.data.coordinate.longitude;
        Linking.openURL(url);
    };

    const renderImageItem = (info: ListRenderItemInfo<ImageSourcePropType>): React.ReactElement => (
        <Image
            style={styles.imageItem}
            source={info.item}
        />
    );

    const renderOptionItemIcon = (style: ImageStyle, icon: string): React.ReactElement => (
        <Icon {...style} name={icon}/>
    );

    const renderOptionItem = (option: ProductOption, index: number): React.ReactElement => (
        <Button
            key={index}
            style={styles.optionItem}
            appearance='ghost'
            size='small'
            icon={(style: ImageStyle) => renderOptionItemIcon(style, option.icon)}>
            {option.title}
        </Button>
    );

    const renderDetailItem = (detail: string, index: number): React.ReactElement => (
        <Button
            key={index}
            style={styles.detailItem}
            appearance='outline'
            size='tiny'>
            {detail}
        </Button>
    );

    const renderBookingFooter = (): React.ReactElement => (
        <View>
            <Text
                category='s1'>
                Categories
            </Text>
            <View style={styles.detailsList}>
                {props.data.categories.map(renderDetailItem)}
            </View>
            <Text
                category='s1'>
                Facilities
            </Text>
            <View style={styles.optionList}>
                {product.options.map(renderOptionItem)}
            </View>
        </View>
    );

    const pricePerPerson: ProductPrice = new ProductPrice(props.data.price, '£', 'person');

    return (
        <ScrollView style={styles.container}>
            <ImageOverlay
                style={styles.image}
                source={props.data.image}
            />

            <Card
                style={styles.bookingCard}
                appearance='filled'
                disabled={true}
                footer={renderBookingFooter}>
                <Text
                    style={styles.title}
                    category='h6'>
                    {props.data.title}
                </Text>
                <Text
                    style={styles.rentLabel}
                    appearance='hint'
                    category='p2'>
                    Average Price
                </Text>
                <Text
                    style={styles.priceLabel}
                    category='h6'>
                    {pricePerPerson.formattedValue}
                    <Text>{pricePerPerson.formattedScale}</Text>
                </Text>
                <Button
                    style={styles.bookButton}
                    onPress={onBookButtonPress}>
                    BOOK NOW
                </Button>
            </Card>

            <Text
                style={styles.sectionLabel}
                category='s1'>
                Description
            </Text>
            <Text
                style={styles.description}
                appearance='hint'>
                {props.data.description}
            </Text>

            <Text
                style={styles.sectionLabel}
                category='s1'>
                Offers
            </Text>
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay
                    horizontal={false}
                    activeDotColor="#FF6347">
                    <View style={styles.slide}>
                        <Image
                            source={require('../../../assets/images/banners/food-banner1.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../../assets/images/banners/food-banner2.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../../assets/images/banners/food-banner3.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>
            <Text
                style={styles.sectionLabel}
                category='s1'>
                Photos
            </Text>
            <List
                contentContainerStyle={styles.imagesList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={product.images}
                renderItem={renderImageItem}
            />

            <Text
                style={styles.sectionLabel}
                category='s1'>
                Map
            </Text>
            <View style={styles.mapView}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{flex: 1}}
                    region={{
                        latitude: props.data.coordinate.latitude,
                        longitude: props.data.coordinate.longitude,
                        latitudeDelta: 0.00864195044303443,
                        longitudeDelta: 0.000142817690068,
                    }}>
                    <Marker
                        coordinate={props.data.coordinate}
                        image={require('../../../assets/images/map_marker.png')}
                    />
                </MapView>
            </View>
        </ScrollView>
    );
};

const themedStyles = StyleService.create({
    container: {
        backgroundColor: 'background-basic-color-2',
    },
    image: {
        height: 360,
    },
    bookingCard: {
        marginTop: -80,
        margin: 16,
    },
    title: {
        width: '65%',
    },
    rentLabel: {
        marginTop: 24,
    },
    priceLabel: {
        marginTop: 8,
    },
    bookButton: {
        position: 'absolute',
        bottom: 24,
        right: 24,
    },
    detailsList: {
        flexDirection: 'row',
        marginHorizontal: -4,
        marginVertical: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        borderRadius: 16,
    },
    optionList: {
        flexDirection: 'row',
        marginHorizontal: -4,
        marginVertical: 8,
    },
    optionItem: {
        marginHorizontal: 4,
        paddingHorizontal: 0,
    },
    description: {
        marginHorizontal: 16,
        marginVertical: 8,
    },
    sectionLabel: {
        marginHorizontal: 16,
        marginVertical: 8,
    },
    imagesList: {
        padding: 8,
        backgroundColor: 'background-basic-color-2',
    },
    imageItem: {
        width: 180,
        height: 120,
        borderRadius: 8,
        marginHorizontal: 8,
    },
    mapView: {
        height: 250,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 10
    },
    sliderContainer: {
        height: 100,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 15,
    },
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