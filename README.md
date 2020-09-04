# AMEX Shop-Small App
The mobile app in react native for implement the personalized recommendation feed. 
This is the proof of concept how the recommendation works

## Content
* [Aim and pain points](#Aim and pain points)
* [Proposed solution](#Proposed solution)
    * [Recommendation algorithms](#Recommendation algorithms)
    * [React Native mobile app example](#React Native mobile app example)
    * [Other infrastructures in the future](#Other infrastructures in the future)
* [Conclusion](#Conclusion)

## Aim and pain points

## Proposed solution
An with-trained recommendation system would be implemented at the backend, 
this system will using the user token as the reference to securely access the 
transaction history of the user and analyze the user preferences based on the history
and produce the recommendation results on any internal API requests such as:
```json
    {
        id: '1',
        coordinate: {
            latitude: 51.531164,
            longitude: -0.120207,
        },
        title: 'Amazing Food Place',
        description: "this is the discription",
        image: images[0].image,
        rating: 4,
        reviews: 99,
        categories: ['Restaurant', 'Hotel', 'Dineout'],
        price: 15,
        postcode: "N1 9JL",
        phoneNumber: "07410332392"
    },
```

The system overview should as follow: 
![flow](./assets/flowchart.jpg)

### Recommendation algorithms

### React Native mobile app example

The React Native app is a demo of how a recommendation process works and a typical user interaction
with the system. 

A typical user will first access the **"Explore Page"** which has the recommended offers fed from central
backend server which runs the recommendation system. For example: The user at *Kings Cross Station* 
could receive several markers display on the map as follows
![exp-map](./assets/exp-map.png)

Once the user choose one of the shop-small partner's shop, they will be direct to the shop detail page 
which shows the description, location and current available offers. 
![detail-main](./assets/detail-main.png)

They can also share this with their friend, open the google map to navigate and make a booking via the platform (using telephone number now) as follows:
![detail-more](./assets/detail-more.png)

### Other infrastructures in the future
The current solution only includes *AI component* and *Mobile APP*, the server API should be implemented properly in terms of 
security. Also a robust connection between AI and central database should be designed and collect the proper data for AI to digest.

## Conclusion