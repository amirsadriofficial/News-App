/**
 * @format
 */

import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles/ExploreCategory.style';
import Picture from './../../assets/category/sport.jpg';

const ExploreCategory = () => {
  return (
    <View>
      <Image source={Picture} style={styles.image} />
      <Text>ss</Text>
    </View>
  );
};

export default ExploreCategory;
