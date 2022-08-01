/**
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import styles from './styles/Header.style';

// const data = [
//   {id: 1, name: 'Hello World', url: 'ddd'},
//   {id: 2, name: 'Amir Sadri', url: 'ddd'},
//   {id: 3, name: 'HC Ca World', url: 'ddd'},
// ];

const PopularCarousel = () => {
  return (
    <View>
      <Text>Popular Posts</Text>
    </View>
  );
};

export default PopularCarousel;

// import React from 'react';
// import {Text, View, Dimensions, Image} from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

// const data = [
//   {
//     id: 1,
//     name: 'React JS',
//     url: 'https://icon-library.com/images/react-icon/react-icon-29.jpg',
//   },
//   {
//     id: 2,
//     name: 'JavaScript',
//     url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
//   },
//   {
//     id: 3,
//     name: 'Node JS',
//     url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
//   },
// ];

// const renderItem = ({item}) => {
//   return (
//     <View
//       style={{
//         borderWidth: 1,
//         padding: 20,
//         borderRadius: 20,
//         alignItems: 'center',
//         backgroundColor: 'white',
//       }}>
//       <Image source={{uri: item.url}} style={{width: 200, height: 200}} />
//       <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
//         {item.name}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={{marginVertical: 10}}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={ITEM_WIDTH}
//       />
//     </View>
//   );
// };
// export default App;
