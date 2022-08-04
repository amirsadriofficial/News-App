/**
 * @format
 */

import React from 'react';
import {SafeAreaView, TextInput, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Layout from '../../containers/layout/Layout';
import styles from './styles/Explore.style';
import ExploreCategory from '../../components/explore-category/ExploreCategory';

const Explore = ({navigation}: any) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <Layout navigation={navigation}>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Feather name="search" size={25} color="#000" />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Search..."
            keyboardType="default"
          />
        </View>
        <ExploreCategory />
      </SafeAreaView>
    </Layout>
  );
};

export default Explore;
