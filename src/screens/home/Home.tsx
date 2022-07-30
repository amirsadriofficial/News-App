/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 */

import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#0000ff'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#000'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <>
      <View>
        <Text>Hello world</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />
      <View>
        <Text>Finish</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
  scene: {
    flex: 1,
  },
});
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
