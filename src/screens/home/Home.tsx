/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 */

// import React from 'react';
// import {View, Text} from 'react-native';
// // import React, {useState} from 'react';
// // import {View, StyleSheet, Dimensions, Text} from 'react-native';
// // import {TabView, SceneMap} from 'react-native-tab-view';
// // // import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// // // const Tab = createMaterialTopTabNavigator();

// const FirstRoute = () => (
//   <View>
//     <Text>View 1</Text>
//   </View>
//   <View style={[styles.scene, {backgroundColor: '#0000ff'}]}>
//   <Text>View 1</Text>
// </View>
// );

// const SecondRoute = () => (
//   <View>
//     <Text>View 2</Text>
//   </View>
//   <View style={[styles.scene, {backgroundColor: '#0000ff'}]}>
//   <Text>View 1</Text>
// </View>
// );

// const initialLayout = {width: Dimensions.get('window').width};

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// export default function TabViewExample() {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     {key: 'first', title: 'First'},
//     {key: 'second', title: 'Second'},
//   ]);

//   return (
//     <>
//       <View>
//         <Text>Hello world</Text>
//       </View>
//       <TabView
//         navigationState={{index, routes}}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={initialLayout}
//         style={styles.container}
//       />
//       <View>
//         <Text>Finish</Text>
//       </View>
//       {/* <View style={{flex: 1}}>
//         <Tab.Navigator>
//           <Tab.Screen name="ScreenOne" component={FirstRoute} />
//           <Tab.Screen name="ScreenTwo" component={SecondRoute} />
//         </Tab.Navigator>
//       </View> */}
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 150,
//   },
//   scene: {
//     flex: 1,
//   },
// });

// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={FirstRoute} />
//       <Tab.Screen name="Settings" component={SecondRoute} />
//     </Tab.Navigator>
//   );
// }

// export default MyTabs;

// import {Text} from 'react-native';
// import Header from './Header';
// import Footer from '../../containers/footer/Footer';

// const Home = () => {
//   return (
//     <>
//       <Header />
//       <Text>This is Home page</Text>
//       <Footer />
//     </>
//   );
// };

// export default Home;
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
