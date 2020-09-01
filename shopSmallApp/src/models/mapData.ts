const images = [
    { image: require("../assets/images/banners/food-banner6.jpeg") },
    { image: require("../assets/images/banners/food-banner7.jpeg") },
    { image: require("../assets/images/banners/food-banner8.jpeg") },
    { image: require("../assets/images/banners/food-banner2.jpg") },
    { image: require("../assets/images/banners/food-banner3.jpg") },
];

export const markers = [
    {
        id: '1',
        coordinate: {
            latitude: 51.531164,
            longitude: -0.120207,
        },
        title: 'Amazing Food Place',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
        image: images[0].image,
        rating: 4,
        reviews: 99,
        categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
        id: '2',
        coordinate: {
            latitude: 51.53143,
            longitude: -0.126122,
        },
        title: 'Second Amazing Food Place',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
        image: images[1].image,
        rating: 5,
        reviews: 102,
        categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
    {
        id: '3',
        coordinate: {
            latitude: 51.530166,
            longitude: -0.125406,
        },
        title: 'Third Amazing Food Place',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
        image: images[2].image,
        rating: 3,
        reviews: 220,
        categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
        id: '4',
        coordinate: {
            latitude: 51.536702,
            longitude: -0.121966,
        },
        title: 'Fourth Amazing Food Place',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
        image: images[3].image,
        rating: 4,
        reviews: 48,
        categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
    {
        id: '5',
        coordinate: {
            latitude: 51.527648,
            longitude: -0.124256,
        },
        title: 'Fifth Amazing Food Place',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
        image: images[4].image,
        rating: 4,
        reviews: 178,
        categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
        id: '6',
        coordinate: {
            latitude: 51.52915,
            longitude: -0.13204,
        },
        title: 'Amazing Food Place',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
        image: images[0].image,
        rating: 4,
        reviews: 99,
        categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
        id: '7',
        coordinate: {
            latitude: 51.531406,
            longitude: -0.11567,
        },
        title: 'Second Amazing Food Place',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
        image: images[1].image,
        rating: 5,
        reviews: 102,
        categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
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