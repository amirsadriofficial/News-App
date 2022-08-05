/**
 * @format
 */

import React from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Layout from '../../containers/layout/Layout';
import SavedPost from '../../components/saved-post/SavedPost';
import styles from './styles/Saved.style';

const Saved = ({navigation}: any) => {
  return (
    <Layout navigation={navigation}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Saved</Text>
          <TouchableOpacity>
            <Entypo name="plus" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <SavedPost navigation={navigation} />
      </SafeAreaView>
    </Layout>
  );
};

export default Saved;
