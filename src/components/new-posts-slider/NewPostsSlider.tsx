/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ListRenderItem,
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles/NewPostsSlider.style';

export interface SlideItems {
  id: string;
  image: ImageSourcePropType;
  title: string;
  date: string;
}

const Item = ({item}: {item: SlideItems}) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const NewPostsSlider = ({data}: any) => {
  const renderItem: ListRenderItem<SlideItems> = ({item}) => (
    <Item item={item} />
  );

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>New Posts</Text>
          <TouchableOpacity>
            <Text style={styles.headerButton}>Show All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default NewPostsSlider;

// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   ListRenderItem,
//   Image,
//   ImageSourcePropType,
// } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// export interface SlideItems {
//   id: string;
//   image: ImageSourcePropType;
//   title: string;
//   date: string;
// }

// const Item = ({item}: {item: SlideItems}) => (
//   <View style={styles.item}>
//     <Image source={item.image} style={styles.image} />
//     <Text style={styles.title}>{item.title}</Text>
//     <View style={styles.footer}>
//       <Text style={styles.date}>{item.date}</Text>
//       <FontAwesome name="bookmark-o" size={25} color="#000" />
//     </View>
//   </View>
// );

// const PopularPostsSlider = ({data}: any) => {
//   const renderItem: ListRenderItem<SlideItems> = ({item}) => (
//     <Item item={item} />
//   );

//   return (
// <SafeAreaView style={styles.container}>
//   <View style={styles.header}>
//     <Text style={styles.headerTitle}>Popular Posts</Text>
//     <TouchableOpacity>
//       <Text style={styles.headerButton}>Show All</Text>
//     </TouchableOpacity>
//   </View>
//   <FlatList
//     data={data}
//     renderItem={renderItem}
//     keyExtractor={item => item.id}
//     horizontal
//     showsHorizontalScrollIndicator={false}
//   />
// </SafeAreaView>
//   );
// };
