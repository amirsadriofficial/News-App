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
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles/PopularPostsSlider.style';

export interface SlideItems {
  id: string;
  urlToImage: any;
  title: string;
  publishedAt: string;
}

const truncate = (title: any) => {
  return title.length > 60 ? title.slice(0, 60 - 1) + '...' : title;
};

const Item = ({item}: {item: SlideItems}) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <Image
        source={{
          uri: item.urlToImage,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{truncate(item.title)}</Text>
      <View style={styles.footer}>
        <View style={styles.dateSection}>
          <MaterialIcons name="update" size={15} color="#999" />
          <Text style={styles.date}>{item.publishedAt}</Text>
        </View>
        <FontAwesome name="bookmark-o" size={25} color="#000" />
      </View>
    </View>
  </TouchableOpacity>
);

const PopularPostsSlider = ({data}: any) => {
  const renderItem: ListRenderItem<SlideItems> = ({item}) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Posts</Text>
        <TouchableOpacity>
          <Text style={styles.headerButton}>Show All</Text>
        </TouchableOpacity>
      </View>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default PopularPostsSlider;
