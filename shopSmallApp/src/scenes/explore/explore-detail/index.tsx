import React from 'react';
import {
    Image, ImageProps,
    ImageSourcePropType,
    ImageStyle, Linking,
    ListRenderItemInfo,
    ScrollView,
    View, ViewProps,
} from 'react-native';
import {
    Avatar,
    Button,
    Card,
    Icon,
    IconElement,
    Input,
    List,
    StyleService,
    Text,
    TextProps,
    useStyleSheet
} from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import {Comment, Like, Product, ProductOption, ProductPrice, Profile} from './extra/contentTypes';
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import Swiper from 'react-native-swiper';
import StarRating from "../../../components/star-rating.component";
import OfferCard from "../../../components/OfferCard/OfferCard";

const product: Product = Product.centralParkApartment();

export default (props): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    const onBookButtonPress = (): void => {
        Linking.openURL(`tel:${props.data.phoneNumber}`)
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
            accessoryLeft={(style: ImageStyle) => renderOptionItemIcon(style, option.icon)}>
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
        <View {...props}>
            <Text
                category='s1'
                style={styles.footerText}
            >
                Categories
            </Text>
            <View style={styles.detailsList}>
                {props.data.categories.map(renderDetailItem)}
            </View>
            <Text
                category='s1'
                style={styles.footerText}
            >
                Facilities
            </Text>
            <View style={styles.optionList}>
                {product.options.map(renderOptionItem)}
            </View>
        </View>
    );

    const [inputComment, setInputComment] = React.useState<string>();
    const renderCommentInputLabel = (props: TextProps): React.ReactElement => (
        <Text {...props} style={[props.style, styles.commentInputLabel]}>
            Comments
        </Text>
    );

    const HeartIcon = (props: Partial<ImageProps>): IconElement => (
        <Icon {...props} name='heart'/>
    );

    const MessageCircleIcon = (props: Partial<ImageProps>): IconElement => (
        <Icon {...props} name='message-circle-outline'/>
    );

    const MoreHorizontalIcon = (props: Partial<ImageProps>): IconElement => (
        <Icon {...props} name='more-horizontal'/>
    );

    const renderCommentHeader = (props: ViewProps, comment: Comment): React.ReactElement => (
        <View style={[props.style, styles.commentHeader]}>
            <Avatar source={comment.author.photo}/>
            <View style={styles.commentAuthorContainer}>
                <Text category='s2'>{comment.author.fullName}</Text>
                <Text appearance='hint' category='c1'>{comment.date}</Text>
                <StarRating ratings={4} reviews={1} />
            </View>
            <Button
                style={styles.iconButton}
                appearance='ghost'
                status='basic'
                accessoryLeft={MoreHorizontalIcon}
            />
        </View>
    );

    const byMarkVolter: Comment = new Comment(
            'Yes! I agree with you',
            'Today 11:10 am',
            Profile.markVolter(),
            [],
            [],
        );

    const byHubertFranck: Comment = new Comment(
        'The chair has a good quality!',
        'Today 11:10 am',
        Profile.hubertFranck(),
        [
            byMarkVolter,
        ],
        [
            Like.byMarkVolter(),
        ],
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
                    horizontal={true}
                    activeDotColor="#FF6347">
                    <View style={styles.slide}>
                        <OfferCard
                            title="Buy 1 Get 1"
                            iconName="fast-food"
                            defaultTitle=""
                            iconType="Ionicons"
                            defaultContent=""
                            onPress={() => {}}
                            bottomRightText="30 Remains"
                            content="Lorem ipsum dolor sit."
                        />
                    </View>
                    <View style={styles.slide}>
                        <OfferCard
                            title="£10 Voucher"
                            iconName="beer"
                            defaultTitle=""
                            iconType="Ionicons"
                            defaultContent=""
                            onPress={() => {}}
                            bottomRightText="50 Remains"
                            content="Lorem ipsum dolor sit."
                        />
                    </View>
                    <View style={styles.slide}>
                        <OfferCard
                            title="50% OFF"
                            iconName="pizza"
                            defaultTitle=""
                            iconType="Ionicons"
                            defaultContent=""
                            onPress={() => {}}
                            bottomRightText="10 Remains"
                            content="Lorem ipsum dolor sit."
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

            <Input
                style={styles.commentInput}
                label={renderCommentInputLabel}
                placeholder='Write your comment'
                value={inputComment}
                onChangeText={setInputComment}
            />

            <Card
                style={styles.commentItem}
                header={props => renderCommentHeader(props, byHubertFranck)}>
                <Text>{"Food there is delicious!"}</Text>
                <View style={styles.commentReactionsContainer}>
                    <Button
                        style={styles.iconButton}
                        appearance='ghost'
                        status='basic'
                        accessoryLeft={MessageCircleIcon}>
                        {1}
                    </Button>
                    <Button
                        style={styles.iconButton}
                        appearance='ghost'
                        status='danger'
                        accessoryLeft={HeartIcon}>
                        {1}
                    </Button>
                </View>
            </Card>

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
    footerText: {
        marginHorizontal:20,
        marginTop: 8
    },
    detailsList: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        borderRadius: 16,
    },
    optionList: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 4,
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
    commentInputLabel: {
        fontSize: 16,
        marginBottom: 8,
        color: ""
    },
    commentInput: {
        marginHorizontal: 16,
        marginTop: 24,
        marginBottom: 20,
    },
    commentList: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    commentItem: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
    commentHeader: {
        flexDirection: 'row',
        padding: 16,
    },
    commentAuthorContainer: {
        flex: 1,
        marginHorizontal: 16,
    },
    commentReactionsContainer: {
        flexDirection: 'row',
        marginTop: 8,
        marginHorizontal: -8,
        marginVertical: -8,
    },
    iconButton: {
        paddingHorizontal: 0,
    },
});