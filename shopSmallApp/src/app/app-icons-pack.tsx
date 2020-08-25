import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

const IconProvider = (source: ImageRequireSource) => ({
    toReactElement: ({ animation, ...style }) => (
        <Image style={style} source={source}/>
    ),
});

export const AppIconsPack = {
    name: 'app',
    icons: {
        'shop-small': IconProvider(require('../assets/images/shop-small.png')),
    },
};