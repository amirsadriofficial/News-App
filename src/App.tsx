/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from './screens/home/Home';
import Explore from './screens/explore/Explore';
import Saved from './screens/saved/Saved';
import Profile from './screens/profile/Profile';
import SinglePost from './screens/single-post/SinglePost';
import SingleCategory from './screens/single-category/SingleCategory';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="Saved"
          component={Saved}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="Single Post"
          component={SinglePost}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="Single Category"
          component={SingleCategory}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
