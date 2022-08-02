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
} from 'react-native';

export interface IUser {
  id: string;
  title: string;
  date: string;
}

const DATA = [
  {
    id: '1',
    title: 'First Item',
    date: '24 june 2022',
  },
];

const Item = ({item}: {item: IUser}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.title}>{item.date}</Text>
  </View>
);

const PopularCarousel = () => {
  const renderItem: ListRenderItem<IUser> = ({item}) => <Item item={item} />;

  return (
    <>
      <View>
        <Text>Popular Posts</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
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
});

export default PopularCarousel;
