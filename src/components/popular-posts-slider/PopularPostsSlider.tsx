/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ListRenderItem,
  Image,
  ImageSourcePropType,
} from 'react-native';

export interface IUser {
  id: string;
  image: ImageSourcePropType;
  title: string;
  date: string;
}

const Item = ({item}: {item: IUser}) => (
  <View style={styles.item}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.title}>{item.date}</Text>
  </View>
);

const PopularPostsSlider = ({data}: any) => {
  const renderItem: ListRenderItem<IUser> = ({item}) => <Item item={item} />;

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

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default PopularPostsSlider;
