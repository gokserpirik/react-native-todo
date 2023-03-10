# To-do App
To-do app is a simple app that allows you to create a list of tasks you need to complete. It is built with react-native, redux, firebase and expo.


## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)


## About The App
This app is a simple to-do app that allows you to create a list of tasks you need to complete. It also has quote feature that gives you a quote to motivate you. It is built with react-native, redux, firebase and expo.

## Screenshots
<p align="center">
 <img width=200 src="https://user-images.githubusercontent.com/48176173/214956283-52ab55a8-03e3-466f-b75e-97fba71a7f83.png" />
 <img width=200 src="https://user-images.githubusercontent.com/48176173/214956309-bbb02e75-e394-4cdc-a329-ecf3bd206857.png" />
 <img width=200 src="https://user-images.githubusercontent.com/48176173/214956315-564dfd0a-479a-4561-bd3d-ec34c9852428.png" />
 <img width=200 src="https://user-images.githubusercontent.com/48176173/214956323-fe183c9d-fb1d-4ae4-b742-3a0d06e095a5.png" />
</p>



## Technologies
- [React Native](https://reactnative.dev/)
- [Redux](https://redux.js.org/)
- [Firebase](https://firebase.google.com/)
- [Expo](https://expo.io/)
- [React Navigation](https://reactnavigation.org/)


## Setup
- download or clone the repository
- run `npm install` to install all the dependencies
- create a firebase project and add the firebase config to the `firebase/index.js` file
- set up the firebase database, enable email authentication and add the rules to the database
- run `npm run start` or `npm run android` or `npm run ios` to start the app

#### firestore structure:
```
{
  "users": {
    "user_id": {
      "todos": [
        {
          "id": "todo_id",
          "text": "todo_title",
          "description": "todo_description",
          "completed": false
        }
      ]
    }
  }
}
```

## Approach
- I started by creating the app with expo and react-native
- added redux to the app
- added firebase to the app
- added the login feature to the app
- added the logout feature to the app
- added the todo feature to the app
- added the quote feature to the app
- added react-navigation to the app


## Status
This app is my first react-native app. It is a sample app that I built to learn react-native.

