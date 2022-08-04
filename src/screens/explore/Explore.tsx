/**
 * @format
 */

import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Layout from '../../containers/layout/Layout';
import styles from './styles/Explore.style';

const Explore = ({navigation}: any) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <Layout navigation={navigation}>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Feather name="search" size={25} color="#000" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Search..."
            keyboardType="default"
          />
        </View>
      </SafeAreaView>
    </Layout>
  );
};

export default Explore;
