/**
 * @format
 */

import React from 'react';
import {Text, SafeAreaView, ScrollView, View} from 'react-native';
import styles from './styles/SingleCategory.style';

const SingleCategory = ({route}: any) => {
  const {category} = route.params;

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>{category}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SingleCategory;
