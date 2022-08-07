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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/NewPostsSlider.style';

export interface SlideItems {
  id: string;
  image: ImageSourcePropType;
  title: string;
  date: string;
}

const truncate = (title: any) => {
  return title.length > 60 ? title.slice(0, 60 - 1) + '...' : title;
};

const Item = ({item}: {item: SlideItems}) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.description}>
        <Text style={styles.title}>{truncate(item.title)}</Text>
        <View style={styles.footer}>
          <MaterialIcons name="update" size={20} color="#999" />
          <Text style={styles.date}>{item.date}</Text>
        </View>
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
