/**
 * @format
 */

// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import Home from './screens/home/Home';

// const App = () => {
//   return (
//     <View style={styles.App}>
//       <Home />
//     </View>
//   );
// };

// import React, {type PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             {/* eslint-disable-next-line prettier/prettier */}
//             Edit <Text style={styles.highlight}>App.tsx - Amir Sadri</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   App: {
//     backgroundColor: '#eee',
//   },
// sectionTitle: {
//   fontSize: 24,
//   fontWeight: '600',
// },
// sectionDescription: {
//   marginTop: 8,
//   fontSize: 18,
//   fontWeight: '400',
// },
// highlight: {
//   fontWeight: '700',
// },
// });

// export default App;
// import React from 'react';
// import {StyleSheet, Text, View, StatusBar} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// const ChatScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>ChatScreen</Text>
//     </View>
//   );
// };
// const StatutScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>StatutScreen</Text>
//     </View>
//   );
// };
// const CallScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>CallScreen</Text>
//     </View>
//   );
// };
// const Tab = createMaterialTopTabNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Chats" component={ChatScreen} />
//         <Tab.Screen name="Status" component={StatutScreen} />
//         <Tab.Screen name="Calls" component={CallScreen} />
//       </Tab.Navigator>
//       <StatusBar />
//     </NavigationContainer>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//   },
// });

// export default App;
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="About" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
