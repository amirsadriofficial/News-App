/**
 * @format
 */

import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles/ExploreCategory.style';
import ExploreCategoryData from '../../utils/explore-posts/ExploreCategoryData';
import {SafeAreaView} from 'react-native-safe-area-context';

const ExploreCategory = ({navigation}: any) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {ExploreCategoryData.map(category => (
          <TouchableOpacity
            key={category.id}
            onPress={() =>
              navigation.navigate('Single Category', {
                category: category.title,
              })
            }>
            <View style={styles.category}>
              <Image source={category.image} style={styles.image} />
              <Text style={styles.title}>{category.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default ExploreCategory;
