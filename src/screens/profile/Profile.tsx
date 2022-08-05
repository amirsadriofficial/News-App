/**
 * @format
 */

import React from 'react';
import {Text, Image, View} from 'react-native';
import Layout from '../../containers/layout/Layout';
import styles from './styles/Profile.style';
import Avatar from './../../assets/avatar/profile.jpg';

const Profile = ({navigation}: any) => {
  return (
    <Layout navigation={navigation}>
      <View style={styles.header}>
        <Image source={Avatar} style={styles.image} />
        <Text style={styles.name}>Amir Sadri</Text>
        <Text style={styles.username}>@amirsadri</Text>
      </View>
    </Layout>
  );
};

export default Profile;
