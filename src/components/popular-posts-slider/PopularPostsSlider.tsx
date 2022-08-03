/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  ListRenderItem,
  Image,
  ImageSourcePropType,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles/PopularPostsSlider.style';

export interface SlideItems {
  id: string;
  image: ImageSourcePropType;
  title: string;
  date: string;
}

const Item = ({item}: {item: SlideItems}) => (
  <View style={styles.item}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <View style={styles.footer}>
      <Text style={styles.date}>{item.date}</Text>
      <FontAwesome name="bookmark-o" size={25} color="#000" />
    </View>
  </View>
);

const PopularPostsSlider = ({data}: any) => {
  const renderItem: ListRenderItem<SlideItems> = ({item}) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Popular Posts</Text>
        <Text style={styles.headerButton}>Show All</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PopularPostsSlider;
