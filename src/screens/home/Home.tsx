/**
 * @format
 */

import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default Home;
// import React from 'react';
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
