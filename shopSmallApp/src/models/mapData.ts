const images = [
    { image: require("../assets/images/banners/food-banner6.jpeg") },
    { image: require("../assets/images/banners/food-banner7.jpeg") },
    { image: require("../assets/images/banners/food-banner8.jpeg") },
    { image: require("../assets/images/banners/food-banner2.jpg") },
    { image: require("../assets/images/banners/food-banner3.jpg") },
];

export const markers = [
    {
        coordinate: {
            latitude: 51.531164,
            longitude: -0.120207,
        },
        title: "Amazing Food Place",
        description: "This is the best food place",
        image: images[0].image,
        rating: 4,
        reviews: 99,
    },
    {
        coordinate: {
            latitude: 51.53143,
            longitude: -0.126122,
        },
        title: "Second Amazing Food Place",
        description: "This is the second best food place",
        image: images[1].image,
        rating: 5,
        reviews: 102,
    },
    {
        coordinate: {
            latitude: 51.530166,
            longitude: -0.125406,
        },
        title: "Third Amazing Food Place",
        description: "This is the third best food place",
        image: images[2].image,
        rating: 3,
        reviews: 220,
    },
    {
        coordinate: {
            latitude: 51.536702,
            longitude: -0.121966,
        },
        title: "Fourth Amazing Food Place",
        description: "This is the fourth best food place",
        image: images[3].image,
        rating: 4,
        reviews: 48,
    },
    {
        coordinate: {
            latitude: 51.527648,
            longitude: -0.124256,
        },
        title: "Fifth Amazing Food Place",
        description: "This is the fifth best food place",
        image: images[4].image,
        rating: 4,
        reviews: 178,
    },
];

export const mapStandardStyle = [
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
];