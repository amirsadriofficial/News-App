/**
 * @format
 */

// import React, {useState} from 'react';
// import {View, StyleSheet, Dimensions, Text} from 'react-native';
// import {TabView, SceneMap} from 'react-native-tab-view';
// const FirstRoute = () => (
//   <View style={[styles.scene, {backgroundColor: '#0000ff'}]}>
//     <Text>View 1</Text>
//   </View>
// );
// const SecondRoute = () => (
//   <View style={[styles.scene, {backgroundColor: '#0000ff'}]}>
//     <Text>View 1</Text>
//   </View>
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

// import * as React from 'react';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import {Text, View} from 'react-native';

// const MaterialTopTabs = createMaterialTopTabNavigator();

// const Chat = () => (
//   <View>
//     <Text>Chat View 1</Text>
//   </View>
// );
// const Contacts = () => (
//   <View>
//     <Text>Contacts View 1</Text>
//   </View>
// );

// export default function MaterialTopTabsScreen() {
//   return (
//     <NavigationContainer>
//       <MaterialTopTabs.Navigator>
//         <MaterialTopTabs.Screen
//           name="Chat"
//           component={Chat}
//           options={{title: 'Chat'}}
//         />
//         <MaterialTopTabs.Screen
//           name="Contacts"
//           component={Contacts}
//           options={{title: 'Contacts'}}
//         />
//       </MaterialTopTabs.Navigator>
//     </NavigationContainer>
//   );
// }

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

// import * as React from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChatScreen</Text>
    </View>
  );
};
const StatutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StatutScreen</Text>
    </View>
  );
};
const CallScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CallScreen</Text>
    </View>
  );
};
const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Status" component={StatutScreen} />
        <Tab.Screen name="Calls" component={CallScreen} />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
export default App;
