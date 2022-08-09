/**
 * @format
 */

import React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
// import styles from './styles/SingleCategory.style';

const SingleCategory = ({route}: any) => {
  const {category} = route.params;

  return (
    <ScrollView>
      <SafeAreaView>
        <Text>Hello World! {category}</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SingleCategory;
