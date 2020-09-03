
import { ImageSourcePropType } from 'react-native';

export class Product {

    constructor(readonly title: string,
                readonly description: string,
                readonly price: ProductPrice,
                readonly primaryImage: ImageSourcePropType,
                readonly images: ImageSourcePropType[],
                readonly details: string[],
                readonly options: ProductOption[]) {
    }

    static centralParkApartment(): Product {
        return new Product(
            'Private Rooms with Central Park View',
            'The apartment consists of 2 separate bedrooms, 1 bathroom with a hair dryer. A flat-screen TV and Blu-ray player are available.\n' +
            '\n' +
            'Rodin Museum is 4.2 km from the apartment, while Orsay Museum is 5 km away. The nearest airport is Paris - Orly Airport, 13 km from the property.',
            ProductPrice.tenDollarsPerNight(),
            require('../assets/image-product.jpg'),
            [
                require('../assets/image-product.jpg'),
                require('../assets/image-product.jpg'),
                require('../assets/image-product.jpg'),
            ],
            [
                '2 Guests',
                '2 Bad',
                '2 Bath',
            ],
            [
                ProductOption.wifiOption(),
                ProductOption.tvOption(),
                ProductOption.parkingOption(),
            ],
        );
    }
}

export class ProductPrice {

    constructor(readonly value: number,
                readonly currency: string,
                readonly scale: string) {
    }

    get formattedValue(): string {
        return `${this.currency}${this.value}`;
    }

    get formattedScale(): string {
        return `/${this.scale}`;
    }

    static tenDollarsPerNight(): ProductPrice {
        return new ProductPrice(10, '$', 'night');
    }
}

export class ProductOption {

    constructor(readonly icon: string,
                readonly title: string) {
    }

    static wifiOption(): ProductOption {
        return new ProductOption('wifi', 'Wi-Fi');
    }

    static tvOption(): ProductOption {
        return new ProductOption('umbrella', 'Terrace');
    }

    static parkingOption(): ProductOption {
        return new ProductOption('car', 'Free Parking');
    }
}

export class Profile {

    constructor(readonly firstName: string,
                readonly lastName: string,
                readonly photo: ImageSourcePropType) {
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    static markVolter(): Profile {
        return new Profile(
            'Mark',
            'Volter',
            require('../assets/image-profile.jpg'),
        );
    }

    static hubertFranck(): Profile {
        return new Profile(
            'Hubert',
            'Franck',
            require('../assets/image-profile.jpg'),
        );
    }
}

export class Like {

    constructor(readonly author: Profile) {

    }

    static byMarkVolter(): Like {
        return new Like(
            Profile.markVolter(),
        );
    }

    static byHubertFranck(): Like {
        return new Like(
            Profile.hubertFranck(),
        );
    }
}

export class Comment {

    constructor(readonly text: string,
                readonly date: string,
                readonly author: Profile,
                readonly comments: Comment[],
                readonly likes: Like[]) {
    }

    static byHubertFranck(): Comment {
        return new Comment(
            'The chair has a good quality!',
            'Today 11:10 am',
            Profile.hubertFranck(),
            [
                Comment.byMarkVolter(),
            ],
            [
                Like.byMarkVolter(),
            ],
        );
    }

    static byMarkVolter(): Comment {
        return new Comment(
            'Yes! I agree with you',
            'Today 11:10 am',
            Profile.markVolter(),
            [],
            [],
        );
    }
}