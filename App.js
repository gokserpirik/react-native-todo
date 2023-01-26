
import { Provider } from 'react-redux';
import store from './redux';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import Profile from './screens/Profile';

import AppTodo from './screens/AppTodo';
import Login from './screens/Login';
import Todo from './screens/Todo';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
   <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AppTodo}  options={({ navigation }) => ({ headerRight: () => (
    <Button title="Profile" onPress={()=> navigation.navigate('Profile') }  />
     
        ),})} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Todo" component={Todo} options={({ route }) => ({ title: route.params.item.text })} />



      </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
}



