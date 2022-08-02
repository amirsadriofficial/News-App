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
    <Text style={styles.title}>{item.date}</Text>
  </View>
);

const PopularPostsSlider = ({data}: any) => {
  const renderItem: ListRenderItem<SlideItems> = ({item}) => (
    <Item item={item} />
  );

  return (
    <>
      <View>
        <Text>Popular Posts</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
        />
      </SafeAreaView>
    </>
  );
};

export default PopularPostsSlider;
