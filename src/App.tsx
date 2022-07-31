/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from './screens/home/Home';
import Explore from './screens/explore/Explore';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
