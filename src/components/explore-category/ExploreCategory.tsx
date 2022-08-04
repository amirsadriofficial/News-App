/**
 * @format
 */

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles/ExploreCategory.style';
import ExploreCategoryData from '../../utils/explore-posts/ExploreCategoryData';
import {SafeAreaView} from 'react-native-safe-area-context';

const ExploreCategory = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {ExploreCategoryData.map(category => (
          <View style={styles.category}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.title}>{category.title}</Text>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default ExploreCategory;
